---
title: Csv.Document
---

# Csv.Document


## Description

以表格方式傳回 CSV 文件的內容。


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


## Details

以資料表傳回 CSV 文件的內容。    <ul>     <li>        <code>columns</code> 可以是 null、資料行數目、資料行名稱清單、資料表類型或選項記錄。      </li>      <li>        <code>delimiter</code> 可以是單一字元、字元清單，或是值 <code>""</code>，其表示資料列應該由連續的空白字元分割。預設: <code>","</code>。      </li>      <li>        請參閱 <code>ExtraValues.Type</code> 以取得 <code>extraValues</code> 支援的值。      </li>      <li>        <code>encoding</code> 指定文字編碼類型。      </li>      </ul>    若已為 <code>columns</code> 指定了記錄 (且 <code>delimiter</code>、<code>extraValues</code> 及 <code>encoding</code> 均為 null)，則可提供下列記錄欄位:    <ul>      <li>       <code>Delimiter</code>: 資料行分隔符號。預設: <code>","</code>。      </li>      <li>        <code>Columns</code>: 可以是 null、資料行數目、資料行名稱清單或資料表類型。若資料行數目少於輸入中找到的數目，則會忽略額外的資料行。若資料行數目多於輸入中找到的數目，額外的資料行將為 null。未指定時，資料行數目將取決於在輸入中找到的項目。      </li>      <li>        <code>Encoding</code>: 檔案的文字編碼。預設: 65001 (UTF-8)。      </li>      <li>        <code>CsvStyle</code>: 指定引號的處理方式。        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (預設): 欄位中的引號僅緊跟在分隔符號之後才有意義。          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: 無論引號出現的位置，欄位中的引號一律有意義。          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: 指定如何處理以引號括起來的分行符號。        <ul>          <li>            <code>QuoteStyle.Csv</code> (預設): 以引號括起來的分行符號會視為資料的一部份，而不會視為目前資料列的結尾。          </li>          <li>            <code>QuoteStyle.None</code>: 所有分行符號均會視為目前資料列的結尾，即使其發生在以引號括起來的值中也是一樣。          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
使用資料行標頭處理 CSV 文字
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
