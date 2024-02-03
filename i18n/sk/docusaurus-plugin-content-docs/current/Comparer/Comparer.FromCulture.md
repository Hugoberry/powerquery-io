---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Vráti funkciu porovnávača na základe zadanej kultúry a rozlišovania malých a veľkých písmen.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Vráti funkciu porovnávača, ktorá používa <code>culture</code> a rozlišovanie malých a veľkých písmen <code>ignoreCase</code> na vykonanie porovnaní.<br />      <br />      Funkcia porovnávača akceptuje dva argumenty a vráti hodnotu -1, 0 alebo 1 na základe toho, či je prvá hodnota menšia, rovná alebo väčšia ako druhá hodnota.<br />      <br />      Predvolená hodnota pre <code>ignoreCase</code> je false. Jazyková verzia <code>culture</code> by mala byť jedným z miestnych nastavení podporovaných rozhraním .NET framework (napríklad sk-SK).    


## Examples

### Example #1 
Porovnaj &#34;a&#34; a &#34;A&#34; s použitím miestneho nastavenia &#34;en-US&#34; a zisti, či sa hodnoty rovnajú.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Porovnaj &#34;a&#34; a &#34;A&#34; s použitím miestneho nastavenia &#34;en-US&#34; pri ignorovaní veľkých a malých písmen a zisti, či sa hodnoty rovnajú.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
