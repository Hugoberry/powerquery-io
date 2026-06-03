---
title: Table.SplitColumn
---

# Table.SplitColumn


Belirtilen sütunu, belirtilen ayırıcı işlevini kullanarak bir dizi ek sütuna böler.


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Remarks

Belirtilen sütunu, belirtilen ayırıcı işlevini kullanarak bir dizi ek sütuna böler.

-   `table`: Bölünecek sütunu içeren tablo.
-   `sourceColumn`: Bölünecek sütunun adı.
-   `splitter`: Sütunu bölmek için kullanılacak ayı işlevi (örneğin, `Splitter.SplitTextByDelimiter` veya `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: Oluşturulacak yeni sütun adlarının listesi veya yeni sütunların sayısı.
-   `default`: Yeni sütunların tümünü dolduracak yeterli bölünmüş değer olmadığından kullanılan değeri geçersiz kılar. Bu parametrenin varsayılan değeri `null` olur.
-   `extraColumns`: Yeni sütunların sayısından daha fazla bölünmüş değer varsa ne yapılacağını belirtir. Bu parametreye `ExtraValues.Type` numaralandırma değerini geçirebilirsiniz. Varsayılan değer `ExtraValues.Ignore` değeridir.


## Examples

### Example #1
Ad sütununu ad ve soyadı olarak bölün.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "))
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, Name.1 = text, Name.2 = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #2
Ad sütununu ad ve soyadı olarak bölün, ardından yeni sütunları yeniden adlandırın.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"})
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #3
Ad sütununu ad ve soyadı olarak bölün, yeni sütunları yeniden adlandırın ve tüm boşlukları "-Girdi Yok-" ifadesiyle doldurun.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        "-No Entry-")
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", "-No Entry-", "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #4
Ad sütununu ad ve soyadı olarak bölün, ardından yeni sütunları yeniden adlandırın. Kullanılabilir sütun sayısından daha fazla değer olabileceğinden, soyadı sütununu ad değerinden sonraki tüm değerleri içeren bir listeye dönüştürün.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul Green", "543-7890"},
        {4, "Cristina J. Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        null,
        ExtraValues.List)
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", {"White"}, "123-4567"},
    {2, "Jim", {"Smith"}, "987-6543"},
    {3, "Paul", {"Green"}, "543-7890"},
    {4, "Cristina", {"J.", "Best"}, "232-1550"}
})
```




## Category
Table.Transformation
