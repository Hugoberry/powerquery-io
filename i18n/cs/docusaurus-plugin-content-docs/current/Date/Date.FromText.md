---
title: Date.FromText
---

# Date.FromText


## Description

Vytvoří datum z místních, univerzálních a vlastních formátů data.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Vytvoří hodnotu <code>date</code> z textové reprezentace <code>text</code>. Pro upřesnění dalších vlastností můžete zadat volitelný parametr <code>record</code>, <code>options</code>. <code>Record</code> může obsahovat následující pole:<ul>   <li><code>Format</code>: Hodnota typu <code>text</code> udávající formát, který se má použít. Další informace najdete na https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechání tohoto pole nebo zadání hodnoty <code>null</code> způsobí, že se datum parsuje podle nejvhodnějšího postupu.</li>   <li><code>Culture</code>: Pokud nemá <code>Format</code> hodnotu null, řídí některé specifikátory formátu jazyková verze <code>Culture</code>. Například u <code>"en-US"</code> má <code>"MMM"</code> hodnotu <code>"Jan", "Feb", "Mar", ...</code>, zatímco u <code>"ru-RU"</code> má <code>"MMM"</code> hodnotu <code>"янв", "фев", "мар", ...</code>. Když má hodnota <code>Format</code> hodnotu <code>null</code>, řídí výchozí formát, který se má použít, jazyková verze <code>Culture</code>. Když má <code>Culture</code> hodnotu <code>null</code> nebo není zadaná, použije se <code>Culture.Current</code>.</li></ul>Pokud chcete podporovat starší pracovní postupy, může být <code>options</code> také textová hodnota. Chování bude stejné jako kdyby se <code>options</code><code> = [Format = null, Culture= <code>options</code>]</code>.


## Examples

### Example #1 
Převede hodnotu &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; na hodnotu &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Umožňuje převod pomocí vlastního formátu a německé jazykové verze.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Vyhledá datum v gregoriánském kalendáři, které odpovídá začátku roku 1400 v kalendáři Hidžra.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
