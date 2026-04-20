# Dataset Templates

This page provides starter files for practical execution.

Use these templates to run the full workflow quickly and consistently.

## What Is Included

| File                                                                     | Purpose                                                   |
| ------------------------------------------------------------------------ | --------------------------------------------------------- |
| [khandala_survey_utm43n.csv](assets/datasets/khandala_survey_utm43n.csv) | Survey point (UTM 43N) input for Excel and QGIS workflows |
| [khandala_survey_local.csv](assets/datasets/khandala_survey_local.csv)   | Survey point (Local) input for Excel and QGIS workflows   |
| [cad_layers_template.csv](assets/datasets/cad_layers_template.csv)       | Starter layer naming and discipline for CAD               |
| [ts_points_sample.csv](assets/datasets/ts_points_sample.csv)             | Total station point sample for reference                  |

## Workflow Specific Applications

- Planning a watchmen cabin in PWD Khandala campus.
- Plan and design a road alignment for Kolwan. Road starting point coordinates: `Easting: 346305.44`, `Northing: 2054384.11` in UTM Zone 43N (EPSG:32643).

## OpenTopygraphy API KEY

- For temporary use in the workshop, use the following API key for OpenTopography DEM downloads: **dfceae7f7bf42b0a89b4e1b5e595cacd**.

## Sample Survey CSV Fields

| Field       | Meaning                 | Required for                      |
| ----------- | ----------------------- | --------------------------------- |
| `PointID`   | Unique point identifier | Excel validation, GIS/CAD mapping |
| `Easting`   | X coordinate            | QGIS point import                 |
| `Northing`  | Y coordinate            | QGIS point import                 |
| `Elevation` | Z value in meters       | QA, terrain interpretation        |
| `Code`      | Point classification    | Filtering and symbolization       |

## Quick Start with Templates

1. Copy all template files into your project `01_raw` folder.
2. Keep originals unchanged.
3. Create cleaned derivatives in `02_excel`, `03_cad` and `04_qgis`.
4. For detailed analysis, use cleaned survey points to generate survey-derived DEM in QGIS.
5. Use outputs from [Practical Execution Guide](practical-execution-guide.md) for final publish.

## How To Adapt for Any Location

1. Replace AOI geometry with your project polygon.
2. Replace survey CSV points with project observations.
3. Keep the same column names to avoid import errors.
4. Use the correct projected CRS for your AOI.

Assumption in workshop samples: UTM Zone 43N (`EPSG:32643`).

For a different AOI, switch to the correct UTM zone and keep that CRS consistent in all tools.

## Naming and Version Convention

Use short, stable, version-friendly names:

- Pattern: `YYYYMMDD_project_component_v01.ext`
- Example: `20260417_training_points_clean_v02.csv`
- Keep major milestone versions in OneDrive with Version History enabled.

## Recommended Data Hygiene

- Keep original raw files unchanged.
- Use separate cleaned versions.
- Keep units in field names when needed.
- Keep IDs unique and stable.
- Avoid spaces/special characters in critical exchange file names. Use underscores (\_) or hyphens (-) instead.
