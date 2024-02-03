---
title: Text.Combine
---

# Text.Combine


## Description

Yhdistää tekstiarvoluettelon yhdeksi tekstiarvoksi.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Palauttaa tuloksen, joka saadaan yhdistämällä tekstiarvojen luettelo, <code>texts</code>, yhdeksi tekstiarvoksi. Kohteessa <code>texts</code> olevat <code>null</code>-arvot ohitetaan.    Valinnainen <code>separator</code>, jota käytetään lopullisessa yhdistetyssä tekstissä, voidaan määrittää.


## Examples

### Example #1 
Yhdistä tekstiarvot &#34;Seattle&#34; ja &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Yhdistä tekstiarvot &#34;Seattle&#34; ja &#34;WA&#34; pilkulla ja välilyönnillä eroteltuna.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Yhdistä arvot &#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt; ja &#34;WA&#34; pilkulla ja välilyönnillä eroteltuina. (Huomaa, että &lt;code&gt;null&lt;/code&gt; ohitetaan.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
