# Interoperability Workflow

This page explains the safest and simplest way to move data between Excel, Civil 3D, QGIS, Google Earth Pro, and OneDrive.

This is a beginner-first workflow focused on communication outputs (PDF and KMZ) while preserving editable exchange files.

## What This Page Covers

- End-to-end data handoff from survey CSV to communication outputs.
- Format decisions for vectors, rasters, and Earth-browser sharing.
- EPSG:32643 and units checks at every exchange point.
- Compact OneDrive publishing workflow for team collaboration.

## Workshop Defaults (Keep Fixed)

- Working projected CRS: `EPSG:32643`
- Distance and elevation units: meters
- Communication priority outputs: Plot PDF and KMZ
- Editable exchange outputs: GeoPackage/Shapefile and GeoTIFF

## Critical Elevation Source Rule

- Preliminary analysis without detailed site survey: use Copernicus 30m DEM.
- Detailed analysis with detailed site survey: generate DEM from detailed survey and use it for contour/slope/profile products.
- Carry DEM source information in filenames/metadata so CAD, GIS, and reporting teams use the same terrain basis.

## Why Interoperability Fails

- CRS missing or wrong during import/export.
- Mixed units across tools.
- Attribute field names changed during conversion.
- Uncontrolled file naming and versioning.
- Terrain-derived outputs generated from the wrong elevation source for the analysis stage.

Rule: treat one dataset as source-of-truth, then publish derived exports for other tools.

## End-to-End Data Flow

```mermaid
flowchart TD
    subgraph SurveyCad[Survey to CAD Workflow]
        A[Survey CSV] --> B[Excel clean and validate]
        B --> C[QGIS import as points]
        C --> D[Save engineering layer <br> as GeoPackage]
        D --> E[Civil 3D MAPIMPORT]
        E --> F[Civil 3D drafting and annotation]
        F --> G[Plot PDF]
    end

    subgraph TerrainMap[Terrain to Map Workflow]
        H[AOI in QGIS] --> I{Detailed survey available?}
        I -->|No| J[Copernicus 30m <br> DEM download]
        I -->|Yes| K[Survey points <br> to DEM conversion]
        J --> L[Reproject to EPSG 32643]
        K --> L
        L --> M[Contour extraction]
        M --> N[Map PDF]
    end

    subgraph EarthReview[Google Earth Review Workflow]
        M --> O[QGIS to KMZ export]
        O --> P[Google Earth Pro review]
    end

    subgraph Publish[Unified Delivery Workflow]
        Q[OneDrive publish package]
    end

    G --> Q
    N --> Q
    P --> Q

    classDef input fill:#e3f2fd,stroke:#1565c0,stroke-width:1.5px,color:#0d47a1;
    classDef process fill:#fff8e1,stroke:#ef6c00,stroke-width:1.5px,color:#e65100;
    classDef decision fill:#ffebee,stroke:#c62828,stroke-width:1.5px,color:#8e0000;
    classDef output fill:#e8f5e9,stroke:#2e7d32,stroke-width:1.5px,color:#1b5e20;

    class A,H input;
    class B,C,D,E,F,J,K,L,M,O,P process;
    class I decision;
    class G,N,Q output;
```

## Format Decision Guide

```mermaid
flowchart TD
    subgraph Select[Exchange Selection]
        A[Need to exchange data] --> B{Data type}
        B -->|Tabular survey points| C[CSV then Excel and QGIS]
        B -->|Editable engineering vectors| D[GeoPackage or Shapefile]
        B -->|Background raster| E[GeoTIFF EPSG 32643]
        B -->|Communication for stakeholders| F[KMZ]
    end

    subgraph Use[Workflow Usage]
        D --> G{Need CAD edits?}
        G -->|Yes| H[MAPIMPORT in Civil 3D]
        G -->|No| I[Use in QGIS directly]
    end

    classDef input fill:#e3f2fd,stroke:#1565c0,stroke-width:1.5px,color:#0d47a1;
    classDef process fill:#fff8e1,stroke:#ef6c00,stroke-width:1.5px,color:#e65100;
    classDef decision fill:#ffebee,stroke:#c62828,stroke-width:1.5px,color:#8e0000;
    classDef output fill:#e8f5e9,stroke:#2e7d32,stroke-width:1.5px,color:#1b5e20;

    class A input;
    class B,G decision;
    class C,D,E,H,I process;
    class F output;
```

## Practical Handoff Workflows

### Workflow A: Survey CSV -> Excel -> QGIS Points

1. Import survey CSV in Excel and validate `PointID`, `Easting`, `Northing`, `Elevation`, `Code`.
2. Remove duplicates and apply naming consistency.
3. Save cleaned CSV as publish-ready input.
4. Add CSV in QGIS as Delimited Text layer (X/Easting, Y/Northing).
5. Assign correct source CRS and then save as GeoPackage.

Output: reliable point layer for GIS/CAD exchange.

### Workflow B: QGIS Vector <-> Civil 3D

1. Export vector from QGIS as GeoPackage or Shapefile.
2. In Civil 3D, set `MAPCSASSIGN` first to `UTM84-43N` (EPSG:32643 equivalent workshop target).
3. Import vector with `MAPIMPORT`.
4. Draft or annotate in Civil 3D.
5. Export GIS-ready layer using `MAPEXPORT`.
6. Validate geometry and attributes again in QGIS.

Output: CAD and GIS stay aligned without rework.

### Workflow C: QGIS Raster -> Civil 3D Background (Preliminary or Detailed)

```mermaid
flowchart TD
    A[Prepare basemap in QGIS] --> B{Detailed survey available?}
    B -->|No| C[Download Copernicus 30m DEM]
    B -->|Yes| D[Convert surveypoints to DEM]
    C --> E[Warp reproject to EPSG 32643]
    D --> E
    E --> F[DEM optional cleanup: 0 to NoData]
    F --> G[Save GeoTIFF outputs with source tag]
    G --> H[Civil 3D MAPIINSERT]
    H --> I[Check alignment with known points]

    classDef input fill:#e3f2fd,stroke:#1565c0,stroke-width:1.5px,color:#0d47a1;
    classDef process fill:#fff8e1,stroke:#ef6c00,stroke-width:1.5px,color:#e65100;
    classDef decision fill:#ffebee,stroke:#c62828,stroke-width:1.5px,color:#8e0000;
    classDef output fill:#e8f5e9,stroke:#2e7d32,stroke-width:1.5px,color:#1b5e20;

    class A input;
    class C,D,E,F,G,H process;
    class B decision;
    class I output;
```

1. Prepare basemap in QGIS.
2. Decide terrain source by analysis stage:
   - Preliminary analysis: use Copernicus 30m DEM.
   - Detailed analysis: create DEM from detailed survey points.
3. Reproject raster outputs to `EPSG:32643`.
4. Optionally clean DEM zero pixels to NoData before contour generation.
5. Insert georeferenced raster in Civil 3D using `MAPIINSERT`.
6. Verify against known control locations.
7. Keep source tag in filename (example: `_copernicus30m_` or `_survey_`).

Output: consistent background context in CAD and GIS.

### Workflow D: QGIS -> KMZ -> Google Earth Pro

1. Export final communication layer from QGIS as KMZ.
2. Open in Google Earth Pro.
3. Verify names, labels, and geometry.
4. Use `R` key to reset north-up/no-tilt before final screenshots.

Output: stakeholder-friendly visualization package.

### Workflow E: Publish and Collaborate in OneDrive

```mermaid
flowchart TD
    A[Finalize PDF KMZ and editable files] --> B[Move to OneDrive project folder]
    B --> C[Share with specific people]
    C --> D[Set view or edit permissions]
    D --> E[Use Version History for rollback]

    classDef input fill:#e3f2fd,stroke:#1565c0,stroke-width:1.5px,color:#0d47a1;
    classDef process fill:#fff8e1,stroke:#ef6c00,stroke-width:1.5px,color:#e65100;
    classDef decision fill:#ffebee,stroke:#c62828,stroke-width:1.5px,color:#8e0000;
    classDef output fill:#e8f5e9,stroke:#2e7d32,stroke-width:1.5px,color:#1b5e20;

    class A input;
    class B,C,D process;
    class E output;
```

1. Publish final files in OneDrive project structure.
2. Share communication files as view links.
3. Share editable files only to required editors.
4. Use Version History after major edits.

Output: controlled collaboration and recovery-ready file trail.

## Minimum Handoff Checklist

- CRS is explicit and correct (`EPSG:32643`) in all GIS/CAD exports.
- Units are meters for distance/elevation.
- DEM source is explicit for terrain-derived products (Copernicus 30m preliminary or survey-derived detailed).
- Critical IDs and attributes remain intact after conversion.
- Final PDF and KMZ open correctly in target tools.
- OneDrive permissions match intended audience.

## Related Pages

- [Excel 365 Reference](excel-365-reference.md)
- [AutoCAD Civil 3D Reference](autocad-civil3d-reference.md)
- [QGIS Reference](qgis-gep-reference.md)
- [Google Earth Pro Reference](google-earth-pro-reference.md)
- [OneDrive Reference](onedrive-reference.md)
- [Practical Execution Guide](practical-execution-guide.md)
