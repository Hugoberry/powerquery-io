---
title: Binary.View
---

# Binary.View


Vytvoří nebo rozšíří binární soubor s uživatelsky definovanými obslužnými rutinami pro operace dotazů a akcí.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Vrací zobrazení `binary`, kde se funkce zadané v `handlers` používají místo výchozího chování operace při použití dané operace na zobrazení.

Pokud je uvedené `binary`, jsou všechny funkce obslužné rutiny volitelné. Pokud se `binary` neuvede, vyžaduje se funkce obslužné rutiny `GetStream`. Pokud pro operaci není zadaná funkce obslužné rutiny, použije se místo toho výchozí chování operace na `binary` (s výjimkou `GetExpression`).

Funkce obslužné rutiny musí vracet hodnotu, která je sémanticky ekvivalentní výsledku použití operace na `binary` (nebo výsledné zobrazení v případě `GetExpression`).

Pokud funkce obslužné rutiny vyvolá chybu, použije se na zobrazení výchozí chování operace.

`Binary.View` se dá použít k implementaci sbalení do zdroje dat, pomocí které se přeloží dotazy jazyka M na operace specifické pro zdroj (pro stažení oddílu souboru).

Řiďte se publikovanou dokumentací k vlastnímu konektoru Power Query, ve které najdete podrobnější popis `Binary.View`.


## Examples

### Example #1
Vytvořte základní zobrazení, které pro určení délky nevyžaduje přístup k datům.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
