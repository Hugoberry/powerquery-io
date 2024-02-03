---
title: Binary.View
---

# Binary.View


## Description

Vytvoří nebo rozšíří binární soubor s uživatelsky definovanými obslužnými rutinami pro operace dotazů a akcí.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Vrací zobrazení <code>binary</code>, kde se funkce zadané v <code>handlers</code> používají místo výchozího chování operace při použití dané operace na zobrazení.<br />Pokud je uvedené <code>binary</code>, jsou všechny funkce obslužné rutiny volitelné. Pokud se <code>binary</code> neuvede, vyžaduje se funkce obslužné rutiny <code>GetStream</code>. Pokud pro operaci není zadaná funkce obslužné rutiny, použije se místo toho výchozí chování operace na <code>binary</code> (s výjimkou <code>GetExpression</code>).<br />Funkce obslužné rutiny musí vracet hodnotu, která je sémanticky ekvivalentní výsledku použití operace na <code>binary</code> (nebo výsledné zobrazení v případě <code>GetExpression</code>).<br />Pokud funkce obslužné rutiny vyvolá chybu, použije se na zobrazení výchozí chování operace.<br /><code>Binary.View</code> se dá použít k implementaci sbalení do zdroje dat, pomocí které se přeloží dotazy jazyka M na operace specifické pro zdroj (pro stažení oddílu souboru).<br />Řiďte se publikovanou dokumentací k vlastnímu konektoru Power Query, ve které najdete podrobnější popis <code>Binary.View</code>.<br />


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
