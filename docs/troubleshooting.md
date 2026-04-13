# Troubleshooting

Use this page when outputs are not matching expected results.

## Civil 3D

- Objects not visible after zoom:
   Use zoom extents and check layer on or off state.
- Wrong plot output:
   Check viewport scale, lineweight display, and plot area.
- Imported GIS data shifted:
   Verify drawing units and coordinate system assumptions.
- Raster not aligning:
   Check georeferencing and CRS before mapiinsert.

## Excel

- Wrong formula results:
   Check numeric format and decimal separator.
- index-match not returning value:
   Check exact key match and remove hidden spaces.
- Duplicate detection issues:
   Normalize text case and trim spaces first.
- Print output broken:
   Reset print area and verify page orientation.

## QGIS

- Layer appears in wrong location:
   Check source CRS at import and project CRS.
- Warp output empty or wrong:
   Verify input raster validity and target CRS EPSG 32643.
- Contour not generated:
   Confirm DEM has valid elevation values and no-data settings.
- KML output misplaced in Google Earth:
   Verify export CRS and geometry type.

## OneDrive

- Sync conflict files created:
   Keep latest file, archive conflict copy, and continue.
- Shared file not visible to reviewer:
   Verify link permissions and account sign-in.

## Screenshot Placeholders

> Insert screenshot: CRS mismatch example and corrected alignment.

![CRS Fix Placeholder](assets/images/placeholder-troubleshooting-crs.png)

> Insert screenshot: common Civil 3D plot settings for readable PDF.

![Plot Settings Placeholder](assets/images/placeholder-troubleshooting-plot.png)
