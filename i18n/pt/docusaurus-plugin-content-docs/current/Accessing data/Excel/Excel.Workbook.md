---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Returns the contents of the Excel workbook.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Returns the contents of the Excel workbook.    <ul>     <li> <code>useHeaders</code> can be null, a logical (true/false) value indicating whether the first row of each returned table should be treated as a header, or an options record. Default: false.</li>     <li> <code>delayTypes</code> can be null or a logical (true/false) value indicating whether the columns of each returned table should be left untyped. Default: false.</li>    </ul>    If a record is specified for <code>useHeaders</code> (and <code>delayTypes</code> is null), the following record fields may be provided:    <ul>     <li> <code>UseHeaders</code>: Can be null or a logical (true/false) value indicating whether the first row of each returned table should be treated as a header. Default: false.</li>     <li> <code>DelayTypes</code>: Can be null or a logical (true/false) value indicating whether the columns of each returned table should be left untyped. Default: false.</li>     <li> <code>InferSheetDimensions</code>: Can be null or a logical (true/false) value indicating whether the area of a worksheet that contains data should be inferred by reading the worksheet itself, rather than by reading the dimensions metadata from the file. This can be useful in cases where the dimensions metadata is incorrect. Note that this option is only supported for Open XML Excel files, not for legacy Excel files. Default: false.</li>    </ul>    


## Examples

### Example #1 
Return the contents of Sheet1 from an Excel workbook.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
