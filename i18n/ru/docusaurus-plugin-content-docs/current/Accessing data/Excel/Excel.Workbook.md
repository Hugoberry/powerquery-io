---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Возвращает содержимое книги Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Возвращает содержимое книги Excel.     <ul>     <li> <code>useHeaders</code> может иметь значение NULL, логическое значение (true/false), указывающее, должна ли первая строка каждой возвращаемой таблицы обрабатываться как заголовок, либо содержать запись параметров. Значение по умолчанию: false.</li>     <li> <code>delayTypes</code> может иметь значение NULL или логическое значение (true/false), указывающее, оставлять ли столбцы каждой возвращаемой таблицы нетипизированными. Значение по умолчанию: false.</li>    </ul>    Если для <code>useHeaders</code> указана запись (и <code>delayTypes</code> имеет значение NULL), в ней можно указать следующие поля:    <ul>     <li> <code>UseHeaders</code>. Может иметь значение NULL или логическое значение (true/false), которое указывает, обрабатывать ли первую строку каждой возвращаемой таблицы как заголовок. Значение по умолчанию: false.</li>     <li> <code>DelayTypes</code>. Может иметь значение NULL или логическое значение (true/false), которое указывает, оставлять ли столбцы каждой возвращаемой таблицы нетипизированными. Значение по умолчанию: false.</li>     <li> <code>InferSheetDimensions</code>. Может иметь значение NULL или логическое значение (true/false), которое указывает, нужно ли определять область листа, содержащую данные, путем чтения самого листа, а не метаданных размеров из файла. Это может быть полезно в случаях, когда метаданные размеров неверные. Обратите внимание, что этот параметр поддерживается только для Excel-файлов формата Open XML, а не прежних версий. Значение по умолчанию: false.</li>    </ul>    


## Examples

### Example #1 
Возврат содержимого Листа1 из книги Excel.
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
