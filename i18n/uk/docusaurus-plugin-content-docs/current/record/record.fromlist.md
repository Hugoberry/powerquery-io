---
title: Record.FromList
---

# Record.FromList


Повертає запис, враховуючи список значень полів і набір полів.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Повертає запис, враховуючи список значень полів `list` і набір полів. `fields` може бути вказано або списком текстових значень, або типом запису. Якщо поля не унікальні, стається помилка.


## Examples

### Example #1
Побудувати запис зі списку значень полів і списку імен полів.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
Побудувати запис зі списку значень полів і типу запису.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
