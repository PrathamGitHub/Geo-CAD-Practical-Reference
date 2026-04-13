# Workshop Handbook

## AutoCAD Civil 3D, Excel 365, QGIS 3.40, and Google Earth Pro

### For Junior Engineers, PWD Pune

Version: v1.0  
Language: English  
Batch Size: Approximately 100 participants  
Lab Mode: One PC per participant  
Internet: Stable internet available  
Software: Civil 3D 2021, Excel 365, QGIS 3.40, Google Earth Pro

---

## 1. Workshop Purpose

This two-day workshop builds practical, field-ready skills in drafting, data handling, GIS processing, and cross-platform interoperability for a single integrated engineering workflow.

Core project theme: Building plan plus approach road integrated package.

Training design principle: Pareto principle. Focus on high-impact commands and workflows. Keep defaults unless changing a setting affects output quality, accuracy, or interoperability.

---

## 2. Learning Outcomes

By the end of Day 2, each participant will be able to:

1. Prepare a simple building line plan and convert it into a wall plan with openings.
2. Derive basic section and elevation from the plan.
3. Add dimensions, annotations, and create a print-ready layout in Civil 3D.
4. Use Excel for engineering tables with formulas, lookup logic, duplicate and unique handling, and print setup.
5. Manage sync, version history, and collaboration through OneDrive.
6. Load and process satellite basemap and DEM in QGIS.
7. Reproject raster data to EPSG 32643 and extract contours.
8. Perform vector conversion between shapefile and KML or KMZ.
9. Export maps with essential cartographic elements.
10. Exchange data among CSV, Civil 3D, QGIS, and Google Earth Pro.

---

## 3. Batch Delivery Model for 100 Participants

Recommended staffing:

1. One lead instructor for stage demonstration.
2. Three to four floor assistants for troubleshooting and pace support.
3. One coordinator for attendance, submissions, and OneDrive management.

Pacing model for mixed and mostly beginner audience:

1. Explain the objective of each step in one sentence.
2. Demonstrate slowly once.
3. Repeat quickly once.
4. Ask participants to perform and verify output checkpoint.
5. Move ahead only after checkpoint majority completion.

---

## 4. Common Integrated Project and Data Package

Project: Ward Office Annex Building with Approach Road.

Common inputs:

1. Building rough sketch with room labels.
2. Approach road centerline and profile reference points.
3. Total station sample CSV with points and attributes.
4. AOI polygon for map download.

Target outputs:

1. Civil 3D drawing set and plot PDF.
2. Excel workbook with cleaned and computed tables.
3. QGIS project with basemap, DEM, contours, and styled vectors.
4. KML or KMZ for Google Earth visualization.
5. OneDrive submission folder with version history.

---

## 5. Day-Wise Timetable

## Day 1

1. Session 1: 2.5 hours, Instructor explanation and live hands-on, 150 minutes.
2. Session 2: 3.5 hours, Participant assignment lab, 210 minutes.

## Day 2

1. Session 1: 2.5 hours, Theory plus instructor live hands-on, 150 minutes.
2. Session 2: 3.5 hours, Participant assignment lab, 210 minutes.

---

## 6. Day 1 Session 1 Plan, 150 Minutes

## Objective

Build a complete drafting-to-tabulation workflow and introduce collaboration.

## Minute Plan

1. 00 to 10 min: Orientation, project folder structure, OneDrive sync check.
2. 10 to 20 min: Civil 3D workspace, layer standards, properties panel basics.
3. 20 to 45 min: Create line plan using line and polyline.
4. 45 to 70 min: Convert to wall plan using offset, trim, extend, and openings.
5. 70 to 90 min: Build section and elevation from the same plan.
6. 90 to 110 min: Add dimensions, annotations, and property consistency.
7. 110 to 125 min: Layout setup, viewport, title block essentials, plotting.
8. 125 to 145 min: Excel engineering sheet from CAD quantities and room schedule.
9. 145 to 150 min: OneDrive versioning and assignment briefing.

## Civil 3D commands and topics to demonstrate on Day 1

Selection and navigation:

1. Different ways to select objects, window selection, crossing selection, add or remove selection.
2. Zoom extents.
3. Zoom window.
4. Pan.
5. Regen.

Draw and modify essentials:

1. Polyline.
2. Closed polyline.
3. Circle.
4. Erase.
5. Move.
6. Copy.
7. Rotate.
8. Scale with reference.
9. Trim.
10. Offset.
11. Mirror.
12. Boundary.
13. Extend.
14. Explode.
15. Join.
16. Pedit.

Object and standards control:

1. Layer panel.
2. Properties panel.
3. Match properties.
4. Snap and Osnap.
5. Dimensions.

Geospatial interoperability commands:

1. Mapimport.
2. Mapiinsert.
3. Mapexport.

## Day 1 end-to-end instructor flow

1. Start with simple line plan for building footprint and room partitions.
2. Convert to wall geometry with offset and cleanup.
3. Add door and window openings using trim and extend.
4. Create one section and one elevation from the same plan.
5. Add dimensions and annotation for plotting clarity.
6. Set up one plot layout and generate PDF.
7. Tabulate room and opening data into Excel.
8. Apply formulas and checks.
9. Save and share through OneDrive with version note.

---

## 7. Day 1 Session 2 Plan, 210 Minutes

## Objective

Participants complete one integrated CAD assignment and one Excel and collaboration assignment.

## Assignment 1, Civil 3D Drawing Package

Tasks:

1. Prepare a simple line plan from provided sketch.
2. Convert line plan to wall plan with thickness.
3. Create and place door and window openings.
4. Produce one section and one elevation.
5. Apply dimensions and key notes.
6. Prepare one plot layout and export PDF.

Evaluation checkpoints:

1. Geometry is closed where required.
2. Openings are consistent with plan logic.
3. Section and elevation correspond to plan.
4. Drawing is readable and plot-ready.

## Assignment 2, Excel and OneDrive Package

Tasks:

1. Build room and opening schedule table.
2. Perform basic math operations.
3. Use round, mround, ceil, floor.
4. Use index-match for lookup from rate or category table.
5. Identify duplicate rows and generate unique list.
6. Use find and replace for controlled corrections.
7. Convert data range to Excel table.
8. Apply filter, sort, and quick stats.
9. Configure page setup for printing.
10. Sync to OneDrive, share with instructor, and add one revision comment.

Evaluation checkpoints:

1. Formula results are correct.
2. Data table behaves correctly with filter and sort.
3. Duplicate and unique outputs are valid.
4. Print preview is professional and readable.
5. Version history shows at least one updated version.

---

## 8. Day 2 Session 1 Plan, 150 Minutes

## Objective

Teach GIS foundation theory and complete an end-to-end raster and vector workflow.

## Minute Plan

1. 00 to 20 min: GIS theory foundation.
2. 20 to 30 min: Plugin checks and CRS strategy.
3. 30 to 60 min: Basemap load and download workflow.
4. 60 to 90 min: DEM download and reprojection workflow.
5. 90 to 105 min: Contour extraction.
6. 105 to 120 min: Vector conversion shapefile and KML or KMZ.
7. 120 to 135 min: Profile and road slope tools.
8. 135 to 150 min: Map export and Day 2 assignment briefing.

## GIS theory topics at the start

1. Raster and vector data models.
2. Vector classes: point, line, polygon.
3. Attribute table and field data types.
4. Coordinate systems and practical use:
5. EPSG 4326 for geographic coordinates and web exchange.
6. EPSG 3857 for common web basemap display.
7. EPSG 32643 for UTM zone based project processing in this training.

## QGIS plugin usage flow

1. QuickWKT for quick coordinate and location checks.
2. NextGIS QuickMapServices for Google satellite basemap display.
3. Advanced Map Downloader for AOI basemap download to GeoTIFF.
4. OpenTopography DEM Downloader for Copernicus Global DEM 30 m.
5. Profile Tool for elevation and slope profile.
6. Road Slope Calculator for slope analysis of approach alignment.

## Day 2 end-to-end instructor flow

1. Set project CRS and explain why EPSG 32643 is target processing CRS.
2. Load satellite basemap using QuickMapServices.
3. Download basemap for AOI using Advanced Map Downloader.
4. Reproject downloaded basemap using Warp GDAL to EPSG 32643.
5. Download Copernicus DEM for AOI.
6. Reproject DEM to EPSG 32643.
7. Extract contours using GDAL Contour tool.
8. Convert shapefile to KML or KMZ and back as needed.
9. Prepare map layout and export PDF.
10. Send exported basemap and vectors for use in Civil 3D interoperability segment.

---

## 9. Day 2 Session 2 Plan, 210 Minutes

## Objective

Participants complete two comprehensive GIS interoperability assignments.

## Assignment 3, Raster to Cartography Package

Tasks:

1. Load AOI and set project CRS.
2. Download basemap and DEM.
3. Reproject both rasters to EPSG 32643.
4. Extract contours from DEM.
5. Generate elevation profile along provided approach road alignment.
6. Run road slope analysis.
7. Prepare cartographic layout with title, north arrow, scale bar, legend, CRS note.
8. Export final map PDF and image.

Evaluation checkpoints:

1. Reprojection is correct and layers align.
2. Contour output exists and is topologically valid.
3. Profile and slope result are interpretable.
4. Layout elements are complete and readable.

## Assignment 4, Interoperability Package

Tasks:

1. Import total station CSV into Excel and clean fields.
2. Import total station CSV into QGIS as delimited text layer.
3. Export selected vector to shapefile and KML or KMZ.
4. Import GIS output into Civil 3D using mapimport.
5. Insert georeferenced raster or imagery into Civil 3D using mapiinsert.
6. Export edited CAD GIS-ready outputs using mapexport.
7. Open KML or KMZ in Google Earth Pro for final communication view.

Evaluation checkpoints:

1. CSV fields and coordinate columns are correctly interpreted.
2. GIS to CAD and CAD to GIS flow works without geometry loss.
3. KML or KMZ opens correctly in Google Earth Pro.
4. Final submission includes all required formats.

---

## 10. Total Station CSV Interoperability SOP

## Excel

1. Open CSV using Data import flow.
2. Verify delimiter and decimal format.
3. Standardize headers, for example PointID, Easting, Northing, Elevation, Code.
4. Use table conversion and formula checks.
5. Detect duplicates and produce unique points list.

## Civil 3D 2021

1. Prepare CSV schema and coordinate order.
2. Use appropriate import method from points workflow or mapimport for spatial data context.
3. Verify coordinate system and insertion units.
4. Style points and labels minimally for clarity.

## QGIS 3.40

1. Add delimited text layer from CSV.
2. Map X and Y fields correctly.
3. Assign source CRS correctly at load time.
4. Save as shapefile or geopackage for stable editing.

---

## 11. Basemap to Civil 3D Interoperability SOP

1. On Day 2, download AOI basemap in QGIS and export as GeoTIFF.
2. Reproject basemap to EPSG 32643 using Warp GDAL.
3. In Civil 3D, use mapiinsert to insert georeferenced raster.
4. Confirm scale, location, and coordinate system alignment.
5. Use raster as drafting and validation backdrop for site context.

---

## 12. AutoCAD Import and Export Interoperability Matrix

1. CSV import path: total station points and attribute tables.
2. Shapefile import path: mapimport.
3. Shapefile export path: mapexport.
4. KML or KMZ handling path:
5. Preferred route: Civil 3D mapexport if KML option is available in setup.
6. Fallback route: export shapefile from Civil 3D, convert in QGIS to KML or KMZ.
7. Raster insertion path: mapiinsert for georeferenced imagery.

---

## 13. OneDrive SOP for Training Delivery and Assessment

1. Create one master class folder and 100 participant subfolders.
2. Naming convention: BatchID ParticipantName EmployeeID.
3. Mandatory uploads by session deadline.
4. Track submission timestamps.
5. Use version history check before grading.
6. Collaboration task: each participant shares at least one file with review permission.

---

## 14. Assessment Framework and Score Sheet

Total marks: 100

1. Civil 3D drafting quality and plot readiness: 25 marks.
2. Excel data quality and formula correctness: 20 marks.
3. QGIS raster and vector workflow correctness: 25 marks.
4. Interoperability execution across tools: 20 marks.
5. OneDrive collaboration and version discipline: 10 marks.

Suggested pass criteria:

1. Minimum 60 overall.
2. Minimum 40 percent score in each major block.

## Score sheet fields

1. Participant ID.
2. Name.
3. Day 1 CAD marks.
4. Day 1 Excel marks.
5. Day 2 GIS marks.
6. Interoperability marks.
7. OneDrive marks.
8. Total.
9. Result.
10. Remarks.

---

## 15. Trainer Checklist

## Before workshop

1. Verify software versions and licenses.
2. Verify all required plugins in QGIS.
3. Keep sample AOI, CSV, and sketch files in shared folder.
4. Prepare quick recovery files for late participants.
5. Test one full dry run including exports.

## During workshop

1. Use checkpoint pauses every 15 to 20 minutes.
2. Keep one command cheat board visible.
3. Ask assistants to log recurring issues.
4. Maintain attendance and submission dashboard.

## After workshop

1. Publish graded score sheet.
2. Share corrected exemplar outputs.
3. Share improvement notes for next batch.

---

## 16. Common Error Handling Guide

1. Wrong layer scale or missing objects in plot: verify viewport scale and plot extents.
2. Off-location GIS layers: verify source CRS and project CRS assignment.
3. Raster offset after insertion: verify georeferencing and target CRS.
4. CSV points misplaced: verify X and Y mapping and decimal separators.
5. KML mismatch in Google Earth: verify export CRS and altitude handling.
6. OneDrive sync conflict: retain latest edited version and archive conflict copy.

---

## 17. Session-Wise Deliverables

## End of Day 1

1. Civil 3D drawing file.
2. Plot PDF.
3. Excel workbook.
4. OneDrive shared link with version history.

## End of Day 2

1. Reprojected basemap GeoTIFF.
2. Reprojected DEM GeoTIFF.
3. Contour dataset.
4. Profile and slope outputs.
5. Final map PDF and image.
6. KML or KMZ file for Google Earth Pro.
7. Interoperability evidence files from CSV, CAD, and GIS flow.

---

## 18. Next Step Readiness for MkDocs

This handbook is structured for direct conversion into MkDocs pages.

Recommended next documentation split:

1. Overview and learning outcomes.
2. Day 1 handbook.
3. Day 2 handbook.
4. Assignment booklets.
5. Assessment and score sheet template.
6. SOP pages for interoperability.
7. Troubleshooting knowledge base.

Recommended visuals for next step:

1. Workflow diagram from field survey CSV to CAD to Excel to GIS to Google Earth.
2. Day-wise timeline chart.
3. Data conversion flowchart.
4. Export and submission checklist infographic.

End of workshop handbook.
