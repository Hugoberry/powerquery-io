---
title: Csv.Document
---

# Csv.Document


Возвращает содержимое документа CSV в виде таблицы.


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

Возвращает содержимое CSV-документа в виде таблицы.    <ul>      <li>        <code>columns</code> может содержать значение NULL, число столбцов, список имен столбцов, тип таблицы или запись параметров.      </li>      <li>        <code>delimiter</code> может быть одним символом, списком символов или значением <code>""</code>, указывающим количество строк, которые следует разделить с использованием последовательных символов пробела. По умолчанию: <code>","</code>.      </li>      <li>        Поддерживаемые значения <code>extraValues</code> см. в описании <code>ExtraValues.Type</code>.      </li>      <li>        <code>encoding</code> определяет тип кодировки текста.      </li>    </ul>    Если для <code>columns</code> указана запись (а <code>delimiter</code>, <code>extraValues</code> и <code>encoding</code> имеют значение NULL), в записи можно указать следующие поля:    <ul>      <li>        <code>Delimiter</code>. Разделитель столбцов. По умолчанию: <code>","</code>.      </li>      <li>        <code>Columns</code>. Может содержать значение NULL, число столбцов, список имен столбцов или тип таблицы. Если число столбцов меньше их числа во входных данных, дополнительные столбцы будут игнорироваться. Если число столбцов превышает их число во входных данных, дополнительные столбцы будут иметь значение NULL. Если значение не указано, число столбцов будет определяться входными данными.      </li>      <li>        <code>Encoding</code>. Кодировка текста файла. По умолчанию: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>. Определяет обработку кавычек.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (по умолчанию). Кавычки в поле учитываются только сразу после разделителя.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>. Кавычки в поле всегда учитываются независимо от того, где они находятся.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>. Определяет обработку разрыва строк в кавычках.        <ul>          <li>            <code>QuoteStyle.Csv</code> (по умолчанию). Разрывы строк в кавычках рассматриваются как часть данных, а не как конец текущей строки.          </li>          <li>            <code>QuoteStyle.None</code>. Все разрывы строк рассматриваются как конец текущей строки, даже если они находятся внутри значения в кавычках.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Обработка текста в формате CSV с заголовками столбцов
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
