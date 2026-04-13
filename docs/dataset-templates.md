# Dataset Templates

This page provides starter files for practical execution.

## What Is Included

- Survey CSV sample.
- AOI sample polygon.
- Approach road sample line.
- Building footprint sample polygon.
- CAD layer template table.
- AutoCAD script template for quick two-room draft.

## Download and Use

- [ts_points_sample.csv](assets/datasets/ts_points_sample.csv)
- [aoi_sample.geojson](assets/datasets/aoi_sample.geojson)
- [approach_road_sample.geojson](assets/datasets/approach_road_sample.geojson)
- [building_footprint_sample.geojson](assets/datasets/building_footprint_sample.geojson)
- [cad_layers_template.csv](assets/datasets/cad_layers_template.csv)
- [cad_two_room_template.scr](assets/datasets/cad_two_room_template.scr)
- [README.md](assets/datasets/README.md)

## How To Adapt for Any Location

1. Replace AOI geometry with your project polygon.
2. Replace survey CSV points with project observations.
3. Keep column names consistent to avoid import issues.
4. Keep CRS metadata documented in file notes.

## Recommended Data Hygiene

- Keep original raw files unchanged.
- Use separate cleaned versions.
- Keep units in field names when needed.
- Keep IDs unique and stable.

## Screenshot Placeholders

> Insert screenshot: dataset files folder and naming pattern.

![Dataset Folder Placeholder](assets/images/placeholder-dataset-folder.png)

> Insert screenshot: AOI and approach road loaded together in QGIS.

![Dataset QGIS Placeholder](assets/images/placeholder-dataset-qgis.png)
