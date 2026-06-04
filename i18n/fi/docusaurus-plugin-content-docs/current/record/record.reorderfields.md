---
title: Record.ReorderFields
---

# Record.ReorderFields


Järjestää tietuekentät uudelleen vastaamaan kenttien nimiluettelon järjestystä.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Järjestää tietueen kentät uudelleen vastaamaan kenttien nimiluettelon järjestystä.

-   `record`: Tietue, joka sisältää uudelleenjärjestettävät kentät.
-   `fieldOrder`: Luettelo, joka sisältää tietueeseen käytettävien kenttien uuden järjestyksen. Kenttien arvot säilytetään, ja kentät, joita ei ole lueteltu tässä parametrissa, jätetään alkuperäisiin sijainteihinsa.
-   `missingField`: Määrittää odotetun toiminnon puuttuville arvoille rivillä, joka sisältää odotettua vähemmän kenttiä. Seuraavat arvot ovat kelvollisia:
    -   `MissingField.Error`: (Oletus) Ilmaisee, että puuttuvien kenttien pitäisi johtaa virheeseen. Jos `missingField` -parametrille ei ole määritetty arvoa, käytetään tätä arvoa.
    -   `MissingField.Ignore`: Ilmaisee, että puuttuvat kentät tulee ohittaa.
    -   `MissingField.UseNull`: Ilmaisee, että puuttuvat kentät tulee sisällyttää `null`\-arvoina.


## Examples

### Example #1
Järjestä joitakin tietueen kenttiä uudelleen.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Järjestä joitakin tietueen kenttiä uudelleen ja sisällytä `null` puuttuville kentille.
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
