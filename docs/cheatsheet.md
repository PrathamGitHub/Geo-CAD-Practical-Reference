# Cheatsheet

This page is for quick recall during practical execution.

Use this when you are actively working, not for detailed theory.

## 60-Second Start Check

- Project folder is inside OneDrive sync path.
- Working CRS is set to `EPSG:32643`.
- Units are meters in CAD, GIS, and reporting.
- Raw files remain unchanged in a separate folder.
- Target communication outputs are PDF and KMZ.

## CRS Cheatsheet

- `EPSG:32643`: default projected metric CRS for this workshop.
- `EPSG:4326`: latitude/longitude for Earth-browser exchange.
- `EPSG:3857`: web basemap display CRS.

Rule: if AOI is outside UTM Zone 43N, switch to the correct UTM zone and keep it consistent everywhere.

## Elevation Source Rule (Critical)

- Preliminary analysis without detailed survey: use Copernicus 30m DEM.
- Detailed analysis with detailed survey: convert survey to DEM and use that for contour/slope/profile.
- Label outputs with source tag (`copernicus30m` or `survey`) to avoid mix-ups.

## AutoCAD Civil 3D Cheatsheet

| Task                        | Command/Path                      | Quick reminder                            |
| --------------------------- | --------------------------------- | ----------------------------------------- |
| Set drawing CRS first       | `MAPCSASSIGN`                     | Use UTM84-43N for workshop target area    |
| Import GIS vectors          | `MAPIMPORT`                       | Import only required layers               |
| Insert georeferenced raster | `MAPIINSERT`                      | Verify raster alignment immediately       |
| Export CAD to GIS           | `MAPEXPORT`                       | Exclude helper/construction layers        |
| Draw connected geometry     | `PLINE`                           | Prefer closed boundaries where needed     |
| Build wall thickness        | `OFFSET`                          | Offset once, then clean intersections     |
| Geometry cleanup            | `TRIM`, `EXTEND`, `JOIN`, `PEDIT` | Remove gaps before export                 |
| Georef correction           | `ALIGN`                           | Use two source-target pairs when possible |
| Layout output               | `PLOT`                            | Always check preview and scale            |

## Excel 365 Cheatsheet

| Need                     | Formula/Feature        | Example                                                |
| ------------------------ | ---------------------- | ------------------------------------------------------ |
| Standard rounding        | `ROUND`                | `=ROUND(E2,2)`                                         |
| Round to fixed step      | `MROUND`               | `=MROUND(E2,0.05)`                                     |
| Conservative upper value | `CEILING`              | `=CEILING(E2,0.1)`                                     |
| Conservative lower value | `FLOOR`                | `=FLOOR(E2,0.1)`                                       |
| Flexible lookup          | `INDEX+MATCH`          | `=INDEX(RateTbl[Rate],MATCH([@Type],RateTbl[Type],0))` |
| Text join                | `CONCAT`               | `=CONCAT([@Block],"-",[@RoomNo])`                      |
| Trim spaces              | `TRIM`                 | `=TRIM(A2)`                                            |
| Parse code parts         | `LEFT`, `RIGHT`, `MID` | `=LEFT([@PointID],3)`                                  |
| Split compound text      | `TEXTSPLIT`            | `=TEXTSPLIT(A2,"_")`                                   |
| Duplicate check          | `COUNTIF`              | `=COUNTIF(A:A,A2)>1`                                   |
| Unique values            | `UNIQUE`               | `=UNIQUE(Table1[Code])`                                |
| Keep headers visible     | Freeze Panes           | `View > Freeze Top Row`                                |
| Print-ready output       | Page Setup             | `Page Layout > Print Area/Scale`                       |

## QGIS Cheatsheet

| Task                 | Tool Path                            | Quick reminder                             |
| -------------------- | ------------------------------------ | ------------------------------------------ |
| Set project CRS      | Project properties/status bar        | Keep `EPSG:32643` fixed                    |
| Add CSV as points    | Data Source Manager > Delimited Text | Set X/Easting and Y/Northing correctly     |
| Add basemap          | QuickMapServices plugin              | Use as visual context, not metric truth    |
| Download AOI basemap | Advanced Map Downloader              | Balance zoom detail vs file size           |
| Download DEM         | OpenTopography DEM Downloader        | Use for preliminary Copernicus 30m DEM     |
| Survey to DEM        | Processing > Interpolation (TIN/IDW) | Use for detailed analysis with survey data |
| Reproject rasters    | Raster > Projections > Warp          | Target `EPSG:32643`                        |
| DEM cleanup          | Save Raster Layer As                 | Set 0 value to NoData if needed            |
| Extract contours     | Processing > GDAL Contour            | Use practical interval                     |
| Export map PDF       | Layout Manager                       | Include title, legend, scale, north arrow  |
| Export KMZ           | Right-click layer > Export           | Validate labels in Google Earth Pro        |

## Google Earth Pro Cheatsheet

- Open KMZ: `File > Open`.
- Save reviewed package: right-click folder > `Save Place As`.
- Measure quickly: `Tools > Ruler`.
- Reset view before screenshots: press `R` (north-up and no-tilt).

## Interoperability Cheatsheet

- CSV -> Excel: validate IDs, clean text, remove duplicates.
- Excel -> QGIS: add points with correct CRS.
- QGIS vector -> Civil 3D: export GPKG/SHP, import via `MAPIMPORT`.
- QGIS raster -> Civil 3D: export GeoTIFF, insert via `MAPIINSERT`.
- Civil 3D -> QGIS: export via `MAPEXPORT`, recheck attributes.
- QGIS -> Google Earth Pro: export KMZ and verify location.

## OneDrive Collaboration Cheatsheet

| Need             | Path                                   | Quick reminder                       |
| ---------------- | -------------------------------------- | ------------------------------------ |
| Share to team    | OneDrive web > Share                   | Prefer Specific people links         |
| Change access    | Details pane > Manage access           | Use view-only for final deliverables |
| Roll back a file | Right-click file > Version history     | Validate content after restore       |
| Sync control     | Taskbar cloud icon > Help and Settings | Clear sync warnings before handoff   |

## Pre-Share Final Check

- CRS and units are consistent.
- PDF and KMZ open correctly.
- Key IDs and attributes are intact.
- OneDrive link permissions match audience.
- Version milestone is saved.
