# Dataset Templates

This page provides starter files for practical execution.

Use these templates to run the full workflow quickly and consistently.

## What Is Included

| File                                | Purpose                                         |
| ----------------------------------- | ----------------------------------------------- |
| `ts_points_sample.csv`              | Survey point input for Excel and QGIS workflows |
| `aoi_sample.geojson`                | Area of interest for basemap and DEM operations |
| `approach_road_sample.geojson`      | Road alignment context layer                    |
| `building_footprint_sample.geojson` | Building polygon starter for planning checks    |
| `cad_layers_template.csv`           | Starter layer naming and discipline for CAD     |
| `cad_two_room_template.scr`         | Fast two-room drafting scaffold in Civil 3D     |

## Download and Use

- [ts_points_sample.csv](assets/datasets/ts_points_sample.csv)
- [aoi_sample.geojson](assets/datasets/aoi_sample.geojson)
- [approach_road_sample.geojson](assets/datasets/approach_road_sample.geojson)
- [building_footprint_sample.geojson](assets/datasets/building_footprint_sample.geojson)
- [cad_layers_template.csv](assets/datasets/cad_layers_template.csv)
- [cad_two_room_template.scr](assets/datasets/cad_two_room_template.scr)
- [README.md](assets/datasets/README.md)

## Required Survey CSV Fields

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
3. Create cleaned derivatives in `02_excel` and `03_qgis`.
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

- Pattern: `project_component_v01_YYYYMMDD.ext`
- Example: `training_points_clean_v02_20260417.csv`
- Keep major milestone versions in OneDrive with Version History enabled.

## Recommended Data Hygiene

- Keep original raw files unchanged.
- Use separate cleaned versions.
- Keep units in field names when needed.
- Keep IDs unique and stable.
- Avoid spaces/special characters in critical exchange file names.
