---
title: Number.IsEven
---

# Number.IsEven


Cho biết giá trị có chẵn hay không.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Cho biết giá trị <code>number</code> có chẵn hay không bằng cách trả về <code>true</code> nếu là chẵn, <code>false</code> nếu ngược lại.


## Examples

### Example #1 
Kiểm tra 625 có phải là số chẵn hay không.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2 
Kiểm tra 82 có phải là số chẵn hay không.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
