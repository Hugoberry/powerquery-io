---
title: Record.TransformFields
---

# Record.TransformFields


## Description

Vrne zapis po uporabi navedenih pretvorb.


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Vrne zapis po uporabi pretvorb, navedenih na seznamu <code>transformOperations</code>, za <code>record</code>.    Ob danem času lahko pretvorite eno ali več polj.      <div>Pri pretvorbi enega polja se pričakuje, da je <code>transformOperations</code> seznam z dvema elementoma. Prvi element v <code>transformOperations</code> določa ime polja, drugi element v <code>transformOperations</code> pa določa funkcijo, ki bo uporabljena za pretvorbo. Na primer: <code>\{"Quantity", Number.FromText}</code></div>      <div>Pri pretvorbi več polj se pričakuje, da je <code>transformOperations</code> seznam seznamov, pri čemer je vsak notranji seznam par imena polja in postopka pretvorbe. Na primer: <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
Pretvorite polje &#34;Cena&#34; v število.
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2 
Pretvorite polji &#34;IDNaročila&#34; in &#34;Cena&#34; v števila.
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
