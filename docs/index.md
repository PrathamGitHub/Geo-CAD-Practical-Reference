# Geo-CAD Practical Reference

<div class="hero">
	<h1>Simple, Practical, and Field-Focused</h1>
	<p>Learn high-impact CAD, spreadsheet, GIS, Earth-view, and collaboration workflows in one connected reference.</p>
	<p class="hero-tags">AutoCAD Civil 3D 2021 • Excel 365 • QGIS 3.40 • Google Earth Pro • OneDrive</p>
</div>

This documentation is for beginner-to-intermediate users who need clear theory, practical execution, and reliable data handoff.

## What This Reference Covers

- Core concepts in plain language.
- Tool-specific beginner workflows.
- Interoperability and format decisions.
- Practical execution from raw survey data to final deliverables.
- Collaboration and version recovery with OneDrive.

## Prerequisites

- AutoCAD Civil 3D 2021 installed.
- Excel 365 installed.
- QGIS 3.40 installed with required plugins.
- Google Earth Pro installed.
- OneDrive signed in and syncing.
- Internet available for basemap/DEM downloads.
- Starter dataset available from [Dataset Templates](dataset-templates.md).

## CRS Assumption for The Handbook

- Target training area assumes UTM Zone 43N (`EPSG:32643`).
- If your Area of Interest (AOI) is in a different zone, use the appropriate UTM zone for that AOI.
- Keep one projected CRS consistent across QGIS, Civil 3D, exports, and exchange files.

## Reference Scope

- Building example: two-room, ground-floor plan.
- Site context: one simple approach road.
- Survey input: total station CSV points.
- GIS input: AOI, basemap, DEM, contours.

## End-to-End Data Flow

```mermaid
flowchart TD
    subgraph Prep[Survey and Data Preparation]
        A[Survey CSV] --> B[Excel clean and validate]
    end

    subgraph GIS[QGIS Processing Workflow]
        C[QGIS import and processing]
        E[QGIS map layout PDF]
        G[QGIS to KMZ]
        H[Google Earth Pro review]
    end

    subgraph CAD[Civil 3D Drafting Workflow]
        D[Civil 3D drafting and layout]
        F[Civil 3D plot PDF]
    end

    subgraph Publish[Delivery Workflow]
        I[OneDrive publish package]
    end

    B --> C
    C --> D
    C --> E
    D --> F
    C --> G
    G --> H
    E --> I
    F --> I
    H --> I

    classDef input fill:#e3f2fd,stroke:#1565c0,stroke-width:1.5px,color:#0d47a1;
    classDef process fill:#fff8e1,stroke:#ef6c00,stroke-width:1.5px,color:#e65100;
    classDef decision fill:#ffebee,stroke:#c62828,stroke-width:1.5px,color:#8e0000;
    classDef output fill:#e8f5e9,stroke:#2e7d32,stroke-width:1.5px,color:#1b5e20;

    class A input;
    class B,C,D,G,H process;
    class E,F,I output;
```

## Quick Start Path

1. Read [Core Concepts and Standards](concepts-and-standards.md).
2. Review [QGIS Reference](qgis-gep-reference.md), [AutoCAD Civil 3D Reference](autocad-civil3d-reference.md), [Excel 365 Reference](excel-365-reference.md), [Google Earth Pro Reference](google-earth-pro-reference.md), and [OneDrive Reference](onedrive-reference.md).
3. Download starter files from [Dataset Templates](dataset-templates.md).
4. Execute the full run in [Practical Execution Guide](practical-execution-guide.md).
5. Use [Cheatsheet](cheatsheet.md) while working and [Troubleshooting](troubleshooting.md) when outputs mismatch.

## Questions and Discussion

- Ask questions, share insights, and discuss solutions in the [Questions and Discussion](questions-discussion.md) section.

## Repository and Collaboration

- GitHub repository: [PrathamGitHub/Geo-CAD-Practical-Reference](https://github.com/PrathamGitHub/Geo-CAD-Practical-Reference)
- Use this repository for updates, issue tracking, and collaborative improvements.
- Open issues for corrections or enhancement suggestions.
- Use pull requests for content improvements and dataset updates.
