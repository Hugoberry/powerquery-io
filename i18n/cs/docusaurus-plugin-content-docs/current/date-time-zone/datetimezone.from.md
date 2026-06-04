---
title: DateTimeZone.From
---

# DateTimeZone.From


Vytvoří z dané hodnoty hodnotu datetimezone.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Vytvoří z dané hodnoty `datetimezone`.

 -   `value`: Hodnota použitá k vytvoření `datetimezone`
-   `culture`: (Volitelné) Jazyková verze, která se má použít při transformaci hodnoty (například en-US).

  Hodnoty následujících typů lze převést na hodnotu `datetimezone`:

 -   `text`: Vrátí hodnotu `datetimezone` z textové reprezentace. Podrobnosti viz `DateTimeZone.FromText`.
-   `date`: Vrátí `datetimezone` obsahující `value` jako komponentu data, `12:00:00 AM` jako komponentu času a posun odpovídající místnímu časovému pásmu.
-   `datetime`: Vrátí `datetimezone` obsahující `value` jako datetime a posun odpovídající místnímu časovému pásmu.
-   `datetimezone`: Vrátí `value`.
-   `time`: Vrátí `datetimezone` s datem ekvivalentním datu automatizace OLE s hodnotou `0` jako komponentu data, `value` jako komponentu času a posun odpovídající místnímu časovému pásmu. Datum automatizace OLE se skládá z čísla s plovoucí desetinnou čárkou označujícího datum a čas, jehož nedílnou součástí je počet dní před nebo po půlnoci 30. prosince 1899 a jehož desetinná část představuje čas tohoto dne dělený 24. Například půlnoc 31. prosince 1899 je vyjádřena hodnotou 1,0; 1. ledna 1900 v 6 hodin ráno je vyjádřeno hodnotou 2,25; půlnoc 29. prosince 1899 je vyjádřena hodnotou -1,0 a 29. prosince 1899 v 6 hodin ráno je vyjádřeno hodnotou -1,25. Základní hodnotou je půlnoc 30. prosince 1899. Minimální hodnotou je půlnoc 1. ledna 0100. Maximální hodnotou je poslední okamžik 31. prosince 9999.
-   `number`: Vrátí `datetimezone` s ekvivalentem hodnoty datetime data automatizace OLE vyjádřeného hodnotou `value` a posunem odpovídajícím místnímu časovému pásmu.
-   `null`: Vrátí `null`.

  Pokud je hodnota `value` jakéhokoli jiného typu, je vrácena chyba.  
  
Hodnota posunu odpovídající místnímu časovému pásmu se při místním spuštění této funkce liší od spuštění online. Při místním spuštění se vrátí místní časové pásmo. Při spuštění online se vrátí časové pásmo UTC (+00:00).


## Examples

### Example #1
Převede textovou reprezentaci data, času a časového pásma na hodnotu `datetimezone`.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
Převede textovou reprezentaci data, času a časového pásma v brazilské portugalštině na hodnotu `datetimezone`.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
Převede číslo představující 1. ledna 2025, 12:00 na hodnotu `datetimezone`. Časové pásmo ve výsledku závisí na tom, jestli je příklad spuštěný místně nebo online.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
