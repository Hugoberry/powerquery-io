---
title: AtScale.Cubes
---

# AtScale.Cubes


Importovat/DirectQuery dat datové krychle z AtScale.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Vrací data datové krychle z AtScale na serveru `server`. Může být zadán volitelný parametr záznamu `options` na řízení následujících možností:

-   `TypedMeasureColumns`: Logická hodnota, která určuje, jestli se typy zadané v multidimenzionálním nebo tabulkovém modelu použijí pro typy přidaných sloupců měr. Pokud je nastaveno na hodnotu false, pro všechny sloupce měr bude použit typ „number“. Výchozí hodnota pro tuto možnost je false.
-   `CommandTimeout`: Délka (v sekundách), která určuje, jak dlouho může běžet dotaz na straně serveru, než bude zrušen. Výchozí hodnota závisí na ovladači.
-   `ConnectionTimeout`: Délka (v sekundách), která určuje, jak dlouho se má čekat, než bude ukončen pokus o připojení k serveru. Výchozí hodnota závisí na ovladači.

Parametr záznamu se ve formátu \[možnost1 = hodnota1, možnost2 = hodnota2...\].


## Examples

### Example #1
Zobrazí seznam dat datové krychle v datové krychli AtScale.
```powerquery
AtScale.Cubes("https://contoso.atscale.com:10502/xmla/...")
```



