# Core Concepts and Standards

This page explains key concepts in plain language and gives practical standards that work in most engineering projects.

## Why Concepts Matter

- Tools change.
- Menus change.
- Good concepts stay useful.

If concepts are clear, practical execution becomes faster and more accurate.

## Core Geospatial Concepts

### Raster

Definition:
A raster is an image made of many grid cells called pixels. Each pixel stores one value.

Context:
Raster is used when data is continuous, such as elevation, temperature, and imagery.

Usage:

- Satellite basemap.
- DEM.
- Slope and terrain products.

Pros:

- Strong for terrain and surface analysis.
- Easy to visualize as continuous surface.

Cons:

- Large file size.
- Precision depends on pixel size.

Recommendation:
Use raster for terrain and background context, not for precise engineering boundaries.

### Vector

Definition:
Vector data stores shapes as coordinates.

Types:

- Point.
- Line.
- Polygon.

Context:
Vector is used for assets and boundaries.

Usage:

- Survey points.
- Road centerlines.
- Building outlines.
- Plot boundaries.

Pros:

- Precise geometry.
- Easy attribute management.
- Smaller files for many use cases.

Cons:

- Less suitable for continuous surfaces like elevation.

Recommendation:
Use vector for design geometry and reporting layers.

## Coordinate Reference System (CRS)

Definition:
CRS is a rule set that tells software how coordinates relate to real-world locations.

Key CRS used in this reference:

- WGS 84 (EPSG Code 4326): latitude and longitude on the Earth's surface in degrees.
- WGS 84 / Pseudo-Mercator (EPSG Code 3857):  standard projected coordinate system for web mapping, used by Google Maps, OpenStreetMap, and Bing Maps.
-  WGS 84 / UTM zone 43N (EPSG Code 32643): projected UTM CRS suited for metric engineering work in the target region.

Practical rule:

- Use EPSG:4326 for KML and broad data exchange.
- Use EPSG:3857 only for web background viewing.
- Use UTM eg. EPSG:32643 for distance, area, and slope analysis. Most common for engineering applications.

## Attribute Data

Definition:
Attributes are table fields attached to map features.

Common fields:

- ID.
- Code.
- Elevation.
- Description.

Recommendation:

- Keep field names short and clear.
- Avoid spaces in field names for compatibility.
- Keep units explicit, for example Elev_m.

## File Formats and Their Role

- CSV: simple tabular exchange, excellent for survey points and schedules.
- GeoTIFF: georeferenced raster format for basemap and DEM.
- Shapefile: widely supported vector format.
- GeoPackage: modern single-file vector and raster container.
- KML or KMZ: earth browser visualization and sharing.
- DWG or DXF: CAD drafting and design exchange.

Recommendation:
Use GeoPackage when possible for editing workflows, and export Shapefile or KML only when needed by external users.

## Industry Standards and Practical Conventions

- Follow OGC-aligned geospatial exchange where possible.
- Keep CRS metadata correct at each import and export step.
- Store elevation units clearly.
- Use clear layer naming.
- Keep one source of truth for each dataset.

## Common Use Cases

- Building and small campus planning.
- Approach road concept and slope checks.
- Survey point visualization and conversion.
- Contour generation from DEM.
- CAD to GIS and GIS to CAD transfer.

## Screenshot Placeholder

> Insert screenshot: same location shown as raster and vector to explain the difference.

![Raster Vector Placeholder](assets/images/placeholder-concepts-raster-vector.png)
