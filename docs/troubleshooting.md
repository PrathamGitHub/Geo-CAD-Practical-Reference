# Troubleshooting

Use this page when outputs are not matching expected results.

## Fast Triage Order (Always First)

1. Check CRS and units.
2. Check layer/file naming and selected inputs.
3. Check export format and destination path.
4. Check OneDrive sync status before sharing.

## Civil 3D

| Symptom                           | Quick fix                                                |
| --------------------------------- | -------------------------------------------------------- |
| Objects not visible after zoom    | Run Zoom Extents and check layer On/Off/Freeze state     |
| Plot output unreadable            | Verify viewport scale, plot area, and lineweight display |
| Imported GIS vector shifted       | Set `MAPCSASSIGN` first and verify units are meters      |
| Georeferenced raster not aligning | Confirm raster CRS and insert again with `MAPIINSERT`    |

## Excel

| Symptom                               | Quick fix                                     |
| ------------------------------------- | --------------------------------------------- |
| Formula result is wrong               | Confirm numeric format and decimal separator  |
| `INDEX+MATCH` returns blank/wrong row | Use exact match and clean keys with `TRIM`    |
| Duplicate checks look inconsistent    | Normalize text and run duplicate check again  |
| Print output broken                   | Reset print area and verify orientation/scale |

## QGIS

| Symptom                               | Quick fix                                                                                     |
| ------------------------------------- | --------------------------------------------------------------------------------------------- |
| Layer appears in wrong location       | Verify source CRS at import and project CRS (`EPSG:32643`)                                    |
| Warp output is empty/wrong            | Recheck input raster validity and Warp target CRS                                             |
| Contour generation fails              | Validate DEM values and NoData settings                                                       |
| Contour/slope/profile too generalized | Check if Copernicus 30m DEM is being used; switch to survey-derived DEM for detailed analysis |
| Survey DEM has spikes or pits         | Check outliers in survey points and adjust interpolation method/resolution                    |
| KMZ/KML misplaced in Google Earth Pro | Re-export with correct CRS and valid geometry                                                 |

## Google Earth Pro

| Symptom                           | Quick fix                                     |
| --------------------------------- | --------------------------------------------- |
| KMZ view orientation is confusing | Press `R` to reset north-up/no-tilt           |
| Labels/geometry look wrong        | Recheck KMZ export layer and simplify styling |

## OneDrive

| Symptom                               | Quick fix                                           |
| ------------------------------------- | --------------------------------------------------- |
| Sync conflict copy created            | Keep latest approved file and archive conflict copy |
| Reviewer cannot open shared file      | Verify sharing permissions and recipient sign-in    |
| File version accidentally overwritten | Open Version History and restore required version   |
| Sync stuck or pending                 | Resume/restart sync and confirm green status icon   |

## Cross-Tool Alignment Issues

| Symptom                            | Quick fix                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------ |
| CAD and GIS outputs do not overlap | Confirm both workflows use `EPSG:32643` and meters                                   |
| CAD profile and GIS profile differ | Confirm both are derived from the same DEM source (Copernicus 30m or survey-derived) |
| PDF and KMZ do not match same area | Check AOI extent and export selection                                                |
| Final share package is incomplete  | Verify required outputs: Civil 3D PDF, QGIS PDF, KMZ                                 |
