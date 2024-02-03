---
title: Date.ToText
---

# Date.ToText


## Description

Vrátí textovou reprezentaci hodnoty data.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Vrátí textovou reprezentaci <code>date</code>. Pro upřesnění dalších vlastností můžete zadat volitelný parametr <code>record</code>, <code>options</code>. <code>culture</code> se používá pouze pro starší pracovní postupy.<code>Record</code> může obsahovat následující pole:<ul>   <li><code>Format</code>: Hodnota typu <code>text</code> udávající formát, který se má použít. Další informace najdete na https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechání tohoto pole nebo zadání hodnoty <code>null</code> způsobí, že se datum naformátuje výchozí hodnotou definovanou jazykovou verzí <code>Culture</code>.</li>   <li><code>Culture</code>: Pokud nemá <code>Format</code> hodnotu null, řídí některé specifikátory formátu jazyková verze <code>Culture</code>. Například u <code>"en-US"</code> má <code>"MMM"</code> hodnotu <code>"Jan", "Feb", "Mar", ...</code>, zatímco u <code>"ru-RU"</code> má <code>"MMM"</code> hodnotu <code>"янв", "фев", "мар", ...</code>. Když má <code>Format</code> hodnotu <code>null</code>, řídí výchozí formát, který se má použít, hodnota<code>Culture</code>. Když má <code>Culture</code> hodnotu <code>null</code> nebo není zadaná, použije se <code>Culture.Current</code>.</li></ul>Pokud chcete podporovat starší pracovní postupy, můžou být <code>options</code> a <code>culture</code> také textové hodnoty. Chování bude stejné jako kdyby se <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Převede řetězec &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; na hodnotu &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Výsledný výstup se může lišit v závislosti na aktuální jazykové verzi.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Umožňuje převod pomocí vlastního formátu a německé jazykové verze.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Najde rok v kalendáři Hidžra odpovídající 1. lednu 2000 v gregoriánském kalendáři.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
