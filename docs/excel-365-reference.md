# Excel 365 Reference

This page focuses on high-impact spreadsheet workflows for engineering data.

## What Excel Is

Definition:
Excel is a spreadsheet tool used for calculation, tabular data management, validation, and reporting.

Context:
It is the fastest way to clean and verify survey or quantity data before CAD or GIS use.

Typical use cases:

- Room and opening schedules.
- Survey point checks.
- Quantity calculations.
- Lookup and data standardization.

## Why It Is Useful

Pros:

- Fast calculations.
- Strong filtering and sorting.
- Easy duplicate and unique checks.
- Good print setup for reports.

Cons:

- Manual editing can introduce mistakes.
- Formula references can break if structure is poor.
- Weak metadata compared to GIS databases.

Recommendation:
Use structured tables and clear column naming from the start.

## Core Concepts in Simple Terms

- Row: one record.
- Column: one field.
- Cell: intersection of row and column.
- Formula: rule that calculates a value.
- Table: structured range with filter and sort controls.

## High-Impact Operations

<!-- prettier-ignore -->
- Basic math operations:
    - addition
    - substraction
    - multiplication
    - division
    - power
    - square root
- Rounding operations:
    - round
    - mround 
    - ceil
    - floor
- Index-Match lookup.
- Duplicate detection.
- Unique value extraction.
- Find and replace.
- Convert range to table.
    - Filter, sort, and quick stats.
- Page setup for print.

## Step-by-Step Practical Workflow

### Part A: Import and Clean Survey CSV

1. Open CSV in Excel.
2. Verify delimiter, decimal format, and headers.
3. Convert range to table.
4. Standardize columns such as PointID, Easting, Northing, Elevation, Code.

### Part B: Validate Data

1. Check missing values.
2. Detect duplicates.
3. Generate unique list for point codes.
4. Use find and replace for naming consistency.

### Part C: Build Engineering Sheets

1. Create room schedule table.
2. Create opening schedule table.
3. Apply basic math for totals.
4. Use round and mround for report-ready values.
5. Use ceil or floor where rule-based rounding is needed.
6. Use index-match for category and rate mapping.

### Part D: Reporting and Sharing

1. Apply filters and sort for quick review.
2. Set print area and page setup.
3. Save in OneDrive synced folder.
4. Share link and check version history.

## Practical Formula Notes

- Use round for standard decimal control.
- Use mround for nearest specified step size.
- Use ceil for conservative upper values.
- Use floor for conservative lower values.
- Use index-match when lookup column is not fixed.

## Industry Practices

- Keep one record per row.
- Avoid merged cells in data tables.
- Keep unit columns explicit.
- Use data validation where repeated code values are expected.
- Freeze header row for long tables.

## Recommendations for Beginner to Intermediate Users

- Keep formulas simple and readable.
- Test formulas on 5 rows before applying to all rows.
- Keep raw data in one sheet and calculated output in another sheet.
- Keep a short data dictionary for column meanings.

## Screenshot Placeholders

> Insert screenshot: total station CSV imported as a clean Excel table.

![Excel Import Placeholder](assets/images/placeholder-excel-import.png)

> Insert screenshot: duplicate and unique handling example.

![Excel Duplicate Unique Placeholder](assets/images/placeholder-excel-duplicate-unique.png)

> Insert screenshot: index-match lookup table and result columns.

![Excel Lookup Placeholder](assets/images/placeholder-excel-index-match.png)

> Insert screenshot: print setup preview for report page.

![Excel Print Placeholder](assets/images/placeholder-excel-print.png)
