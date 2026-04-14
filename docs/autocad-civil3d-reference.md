<!-- prettier-ignore -->
# AutoCAD Civil 3D Reference

This page explains high-impact Civil 3D drafting and interoperability operations in simple language.

## What AutoCAD Civil 3D Is

Definition:
AutoCAD Civil 3D is a CAD platform used to create, edit, and present engineering drawings and civil design elements.

Context:
It is used where geometry clarity, drafting speed, and plotting quality matter.

Typical use cases:

- Building plan drafting.
- Section and elevation preparation.
- Road alignment context drawing.
- CAD and GIS data exchange.

## Why It Is Useful

Pros:

- Precise drafting control.
- Strong layer and property management.
- Industry-accepted drawing outputs.
- Good interoperability with GIS through map tools.

Cons:

- Learning curve for new users.
- Wrong units or CRS setup can create major location errors.
- Over-detailed styling can slow practical work.

Recommendation:
Focus first on geometry quality, dimensions, and clean layers. Styling can be refined later.

## Core Drafting Concepts

- Geometry should be clean and connected.
- Closed boundaries help area, hatch, and export quality.
- Layer discipline keeps files readable and reusable.
- Object snaps improve precision and reduce rework.

## High-Impact Commands

Selection and navigation:

<!-- prettier-ignore -->
- Different object selection methods:
    - window selection
    - crossing selection
    - add or remove selection
- Zoom:
    - extents
    - window
- Pan
- Regen

Drawing and editing:

- Polyline
- Closed polyline
- Circle
- Erase
- Move
- Copy
- Rotate
- Scale
- Offset
- Trim
- Extend
- Mirror
- Boundary
- Explode
- Join
- Pedit

Standards and readability:

- Layer panel
- Properties panel
- Match properties
- Snap
- Osnap
- Dimensions

GIS interoperability commands:

- mapimport
- mapiinsert
- mapexport

## Step-by-Step Practical Workflow

Use the simple sample: two-room ground-floor building with approach road context.

### Part A: Build the Plan

1. Draw the outer footprint using polyline.
2. Draw room partition lines.
3. Make required boundaries closed.
4. Add circles or symbols only where needed.

### Part B: Convert to Practical Wall Plan

1. Use offset for wall thickness.
2. Use trim and extend to clean intersections.
3. Use erase to remove extra segments.
4. Use join or pedit where continuity is required.

### Part C: Add Openings and Presentation

1. Mark door and window positions.
2. Cut openings with trim and extend.
3. Add dimensions.
4. Add annotations.
5. Keep linework readable at print scale.

### Part D: Prepare Output

1. Create one layout.
2. Set viewport and scale.
3. Verify lineweights and text size.
4. Export to PDF.

## CAD and GIS Interoperability

### Import GIS vectors

1. Use mapimport.
2. Select input format, such as shapefile.
3. Map layer and attribute settings.
4. Check geometry location after import.

### Insert georeferenced raster

1. Use mapiinsert.
2. Select georeferenced basemap GeoTIFF.
3. Confirm scale and placement.

### Export GIS-ready output

1. Use mapexport.
2. Select required format.
3. Keep useful attributes.
4. Validate export in QGIS.

## Industry Practices

- Keep base drawing units in meters for field workflows.
- Use clear layer naming conventions.
- Avoid exploding blocks unless required.
- Keep one clean master file and export working copies.
- Record CRS assumptions when exchanging with GIS users.

## Recommendations for Beginner to Intermediate Users

- Do not over-customize settings early.
- Use default styles first and improve only critical output elements.
- Validate geometry before adding detailed annotations.
- Check print preview before final PDF.

## Screenshot Placeholders

> Insert screenshot: layer setup and properties panel with minimal standard layers.

![CAD Layers Placeholder](assets/images/placeholder-cad-layers.png)

> Insert screenshot: line plan transformed into wall plan with openings.

![CAD Wall Plan Placeholder](assets/images/placeholder-cad-wall-plan.png)

> Insert screenshot: mapimport dialog for shapefile import.

![CAD Mapimport Placeholder](assets/images/placeholder-cad-mapimport.png)

> Insert screenshot: mapiinsert result with georeferenced raster in background.

![CAD Mapiinsert Placeholder](assets/images/placeholder-cad-mapiinsert.png)
