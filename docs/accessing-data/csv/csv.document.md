---
title: Csv.Document
---

# Csv.Document


Returns the contents of the CSV document as a table.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Returns the contents of the CSV document as a table.    <ul>      <li>        <code>columns</code> can be null, the number of columns, a list of column names, a table type, or an options record.      </li>      <li>        <code>delimiter</code> can be a single character, a list of characters, or the value <code>""</code>, which indicates rows should be split by consecutive whitespace characters. Default: <code>","</code>.      </li>      <li>        Refer to <code>ExtraValues.Type</code> for the supported values of <code>extraValues</code>.      </li>      <li>        <code>encoding</code> specifies the text encoding type.      </li>    </ul>    If a record is specified for <code>columns</code> (and <code>delimiter</code>, <code>extraValues</code>, and <code>encoding</code> are null), the following record fields may be provided:    <ul>      <li>        <code>Delimiter</code>: The column delimiter. Default: <code>","</code>.      </li>      <li>        <code>Columns</code>: Can be null, the number of columns, a list of column names, or a table type. If the number of columns is lower than the number found in the input, the additional columns will be ignored. If the number of columns is higher than the number found in the input, the additional columns will be null. When not specified, the number of columns will be determined by what is found in the input.      </li>      <li>        <code>Encoding</code>: The text encoding of the file. Default: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: Specifies how quotes are handled.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (default): Quotes in a field are only significant immediately following the delimiter.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: Quotes in a field are always significant, regardless of where they appear.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Specifies how quoted line breaks are handled.        <ul>          <li>            <code>QuoteStyle.Csv</code> (default): Quoted line breaks are treated as part of the data, not as the end of the current row.          </li>          <li>            <code>QuoteStyle.None</code>: All line breaks are treated as the end of the current row, even when they occur inside a quoted value.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Process CSV text with column headers
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```




## Category
Accessing data
