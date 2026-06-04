---
title: Table.FromValue
---

# Table.FromValue


Sukuriama lentelė su stulpeliu iš pateiktos (-ų) reikšmės (-ių).


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Sukuriama lentelė su stulpeliu, kuriame yra pateikta reikšmė arba reikšmių sąrašas, `value`. Galima nurodyti pasirinktinį įrašo parametrą, `options`, norint valdyti nurodytas parinktis:

-   `DefaultColumnName`: stulpelio pavadinimas, naudojamas sudarant lentelę iš sąrašo arba skaliarinės reikšmės.


## Examples

### Example #1
Sukurkite lentelę iš reikšmės 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2
Sukurkite lentelę iš sąrašo.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3
Sukurkite lentelę naudodami reikšmę 1 ir pasirinktinį stulpelio pavadinimą.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
