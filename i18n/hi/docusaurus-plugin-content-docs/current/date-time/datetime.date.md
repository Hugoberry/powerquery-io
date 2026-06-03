---
title: DateTime.Date
---

# DateTime.Date


किसी दी गई दिनांक, दिनांक समय, दिनांक समय क्षेत्र मान के दिनांक घटक को लौटाता है.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

यदि पैरामीटर है, तो `dateTime` पैरामीटर का दिनांक घटक लौटाता है`दिनांक`, `तिथिसमय` या `तिथिसमयक्षेत्र` मान, या `null` यदि पैरामीटर `null` है.


## Examples

### Example #1
#datetime(2010, 12, 31, 11, 56, 02) का दिनांक मान प्राप्त करें.
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
