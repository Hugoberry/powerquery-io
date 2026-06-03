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

Возвращает содержимое CSV-документа в виде таблицы.

-   `columns` может быть пустым, а может содержать количество столбцов, список имен столбцов, тип таблицы или запись вариантов.
-   `delimiter` может быть одним символом, списком символов или значением `""`, указывающим, что разбиение строк следует проводить по нескольким стоящим подряд символам пробела. По умолчанию: `","`.
-   Список поддерживаемых значений `extraValues` см. в описании `ExtraValues.Type`.
-   `encoding` определяет тип кодировки текста.

Если для `columns` указана запись (а `delimiter`, `extraValues` и `encoding` пусты), в записи можно указать следующие поля:

-   `Delimiter`. Односимвольный разделитель столбцов. По умолчанию: `","`.
-   `Columns`. Может быть пустым или содержать количество столбцов, список имен столбцов или тип таблицы. Если указанное количество столбцов меньше их фактического количества во входных данных, дополнительные столбцы будут игнорироваться. Если указанное количество столбцов превышает их фактическое количество во входных данных, дополнительные столбцы будут пусты. Если значение не указано, количество столбцов будет определяться входными данными.
-   `Encoding`. Кодировка текста файла. По умолчанию: 65001 (UTF-8).
-   `CsvStyle`. Определяет обработку кавычек.
    -   `CsvStyle.QuoteAfterDelimiter` (по умолчанию). Кавычки в поле учитываются только сразу после разделителя.
    -   `CsvStyle.QuoteAlways`. Кавычки в поле учитываются всегда независимо от того, где они находятся.
-   `QuoteStyle`. Определяет обработку разрыва строк, взятых в кавычки.
    -   `QuoteStyle.Csv` (по умолчанию). Разрывы строк, взятых в кавычки, рассматриваются как часть данных, а не как конец текущей строки.
    -   `QuoteStyle.None`. Все разрывы строк рассматриваются как конец текущей строки, даже если находятся внутри взятого в кавычки значения.
-   `IncludeByteOrderMark`: Логическое значение, указывающее, следует ли включать метку порядка байтов (BOM) в начале CSV-вывода. Если задано значение true, метка BOM записывается (например, UTF-8 BOM: `0xEF 0xBB 0xBF`); если задано значение false, метка BOM не включается. Эта возможность действует только в сценариях вывода. Значение по умолчанию: `false`.
-   `ExtraValues`: список поддерживаемых значений ExtraValues см. в описании `ExtraValues.Type`.


## Examples

### Example #1
Обработка текста в формате CSV с заголовками столбцов.
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


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
