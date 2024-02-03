---
title: List.TransformMany
---

# List.TransformMany


## Description

Tiek atgriezts saraksts, kura elementi ir iegūti no ievades saraksta, izmantojot norādītās transformācijas funkcijas.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Tiek atgriezts saraksts, kura elementi ir projicēti no ievades saraksta.<br />    <br />    Funkcija <code>collectionTransform</code> katru elementu pārveido starpniekelementu sarakstā, un funkcija <code>resultTransform</code> saņem sākotnējo elementu, kā arī starpniekelementu sarakstā esošu elementu, lai izveidotu galīgo rezultātu.<br />    <br />    Funkcijai <code>collectionTransform</code> ir paraksts <code>(x kā jebkurš) kā saraksts => ...</code>, kur <code>x</code> ir elements <code>list</code>.    Funkcija <code>resultTransform</code> izveido rezultāta formu un tās paraksts ir <code>(x kā jebkurš, y kā jebkurš) kā jebkurš => ...</code>, kur <code>x</code> ir elements <code>list</code> un <code>y</code> ir elements no saraksta, kas ģenerēts, novirzot <code>x</code> uz <code>collectionTransform</code>.


## Examples

### Example #1 
Izplājiet personu un viņu mājdzīvnieku sarakstu.
```powerquery
List.TransformMany(
    {
        [Name = "Alice", Pets = {"Scruffy", "Sam"}],
        [Name = "Bob", Pets = {"Walker"}]
    },
    each [Pets],
    (person, pet) => [Name = person[Name], Pet = pet]
)
```

Result: 
```powerquery
{
    [Name = "Alice", Pet = "Scruffy"],
    [Name = "Alice", Pet = "Sam"],
    [Name = "Bob", Pet = "Walker"]
}
```




## Category
List.Transformation functions
