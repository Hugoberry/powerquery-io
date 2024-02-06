---
title: Table.FromList
---

# Table.FromList


सूची के प्रत्येक आइटम पर निर्दिष्ट विभाजन फ़ंक्शन लागू करके एक सूची को एक तालिका में कनवर्ट करता है.


## Syntax

```powerquery
Table.FromList(
    list as list,
    optional splitter as function,
    optional columns as any,
    optional default as any,
    optional extraValues as ExtraValues.Type
) as table
```


## Remarks

सूची के प्रत्येक आइटम पर वैकल्पिक विभाजन फ़ंक्शन, <code>splitter</code>, लागू करके एक सूची, <code>list</code>  को एक तालिका में कनवर्ट करता है. डिफ़ॉल्ट रूप से, सूची को ऐसे पाठ मानों की सूची माना जाता है जो अल्पविरामों से विभाजित है. वैकल्पिक <code>columns</code>, स्तंभों की संख्या, स्तंभों की सूची या TableType हो सकती है. वैकल्पिक <code>default</code> और <code>extraValues</code> भी निर्दिष्ट किए जा सकते हैं.


## Examples

### Example #1 
डिफ़ॉल्ट विभाजक का उपयोग करके सूची से तालिका बनाएँ.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    null,
    {"Letter", "Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Letter = "a", #"Example Word" = "apple"],
    [Letter = "b", #"Example Word" = "ball"],
    [Letter = "c", #"Example Word" = "cookie"],
    [Letter = "d", #"Example Word" = "door"]
})
```


### Example #2 
कस्टम विभाजक का उपयोग करके सूची से एक तालिका बनाएँ.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    Splitter.SplitByNothing(),
    {"Letter and Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [#"Letter and Example Word" = "a,apple"],
    [#"Letter and Example Word" = "b,ball"],
    [#"Letter and Example Word" = "c,cookie"],
    [#"Letter and Example Word" = "d,door"]
})
```


### Example #3 
Record.FieldValues विभाजक का उपयोग करके सूची से एक तालिका बनाएँ.
```powerquery
Table.FromList(
    {
        [CustomerID = 1, Name = "Bob"],
        [CustomerID = 2, Name = "Jim"]
    },
    Record.FieldValues,
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob"],
    [CustomerID = 2, Name = "Jim"]
})
```




## Category
Table.Table construction
