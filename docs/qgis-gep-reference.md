# QGIS and Google Earth Pro Reference

This page provides simple but complete guidance for GIS theory and practical execution.

## What QGIS Is

Definition:
QGIS is an open-source Geographic Information System used to view, edit, analyze, and export spatial data.

Context:
It is used for basemap preparation, terrain processing, contour extraction, and map publication.

Typical use cases:

- Basemap download and preparation.
- DEM processing and contour generation.
- Vector editing and conversion.
- Map layout and export.

## What Google Earth Pro Is

Definition:
Google Earth Pro is a visualization tool that displays geospatial data on a globe-based earth browser.

Context:
It is best for communication and quick location understanding, not detailed engineering analysis.

## Why These Tools Are Useful

Pros:

- Strong raster and vector support.
- Wide format compatibility.
- Powerful processing tools.
- Good map export options.

Cons:

- CRS mismatch is a common error source.
- Plugin quality can vary.
- Heavy rasters can slow performance.

Recommendation:
Keep one consistent processing CRS and verify at every import step.

## Core Theory in Simple English

### Raster and Vector

- Raster stores values in pixels.
- Vector stores geometry as points, lines, and polygons.

### Attributes

- Attributes are table columns linked to features.
- Correct field type prevents sorting and calculation issues.

### CRS Basics

- EPSG:4326 for lat-long and KML workflows.
- EPSG:3857 for web basemap display.
- EPSG:32643 for metric analysis and engineering context.

## High-Impact Plugins

- QuickWKT for coordinate checks.
- NextGIS QuickMapServices for quick basemap loading.
- Advanced Map Downloader for AOI basemap download.
- OpenTopography DEM Downloader for Copernicus DEM.
- Profile Tool for elevation profiles.
- Road Slope Calculator for route slope checks.

## Step-by-Step Practical Workflow

### Part A: Basemap Workflow

1. Open project and set project CRS.
2. Load satellite basemap with QuickMapServices.
3. Download AOI basemap using Advanced Map Downloader.
4. Save output as GeoTIFF.
5. Reproject to EPSG:32643 using Warp GDAL.

### Part B: DEM Workflow

1. Download Copernicus Global DEM 30 m using OpenTopography DEM Downloader.
2. Save DEM raster.
3. Reproject DEM to EPSG:32643 with Warp GDAL.

### Part C: Contour Workflow

1. Open GDAL Contour tool.
2. Select DEM as input.
3. Set contour interval.
4. Save contour output as vector layer.
5. Apply simple contour style and labels.

### Part D: Conversion and Export Workflow

1. Convert shapefile to KML or KMZ when needed.
2. Convert KML or KMZ back to shapefile when needed.
3. Prepare map layout with title, legend, north arrow, and scale bar.
4. Export map as PDF.
5. Open KML or KMZ in Google Earth Pro for communication view.

## Industry Practices

- Reproject analysis rasters and vectors to projected CRS before measurement.
- Keep no-data values consistent.
- Record contour interval in layer name.
- Keep style files with data for reproducibility.
- Export final communication layers in KML or KMZ for wider access.

## Recommendations for Beginner to Intermediate Users

- Keep project CRS fixed once processing starts.
- Use nearest rules for categorical rasters and bilinear for imagery where appropriate.
- Start with basic symbology and improve only if needed.
- Validate outputs with one known control point.

## Screenshot Placeholders

> Insert screenshot: project CRS setup and status bar confirmation.

![QGIS CRS Placeholder](assets/images/placeholder-qgis-crs.png)

> Insert screenshot: basemap download settings for AOI.

![QGIS Basemap Download Placeholder](assets/images/placeholder-qgis-basemap-download.png)

> Insert screenshot: Warp GDAL settings to EPSG 32643.

![QGIS Warp Placeholder](assets/images/placeholder-qgis-warp.png)

> Insert screenshot: DEM-derived contours displayed with simple labels.

![QGIS Contour Placeholder](assets/images/placeholder-qgis-contour.png)

> Insert screenshot: KML or KMZ visualization in Google Earth Pro.

![GEP KML Placeholder](assets/images/placeholder-gep-kml.png)
