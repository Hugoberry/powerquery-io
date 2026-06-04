---
title: List.TransformMany
---

# List.TransformMany


Tiek atgriezts saraksts, kura elementi ir iegūti no ievades saraksta, izmantojot norādītās transformācijas funkcijas.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Tiek atgriezts saraksts, kura elementi ir projicēti no ievades saraksta.  
  
Funkcija `collectionTransform` katru elementu pārveido starpniekelementu sarakstā, un funkcija `resultTransform` saņem sākotnējo elementu, kā arī starpniekelementu sarakstā esošu elementu, lai izveidotu galīgo rezultātu.  
  
Funkcijai `collectionTransform` ir paraksts `(x kā jebkurš) kā saraksts => ...`, kur `x` ir elements `list`. Funkcija `resultTransform` izveido rezultāta formu un tās paraksts ir `(x kā jebkurš, y kā jebkurš) kā jebkurš => ...`, kur `x` ir elements `list` un `y` ir elements no saraksta, kas ģenerēts, novirzot `x` uz `collectionTransform`.


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
