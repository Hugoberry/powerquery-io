---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Details

Umožňuje načítanie vstavaných tabuliek zverejnených konektorom SparkPost s údajmi agregovanými za počet dní, ktoré zadal používateľ. Pri obnovovaní týchto tabuliek alebo volaní rozhrania SparkPost API pomocou tohto konektora majte na pamäti, že rozhranie SparkPost API má prísne obmedzený počet volaní rozhrania API. Ak vidíte, že server SparkPost vráti kód stavu 429, znamená to, že ste dosiahli limit počtu volaní a pred ďalším volaním budete musieť chvíľu počkať. Pri výbere hodnoty pre parameter Počet dní nezabudnite, že toto rozhranie API ukladá údaje iba za posledných 6 mesiacov.


