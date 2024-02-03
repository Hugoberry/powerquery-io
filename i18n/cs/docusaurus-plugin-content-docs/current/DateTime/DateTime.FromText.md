---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Vytvoří hodnotu datetimezone z místního a univerzálního formátu datetime.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Vytvoří hodnotu <code>datetime</code> z textové reprezentace <code>text</code>. Pro upřesnění dalších vlastností můžete zadat volitelný parametr <code>record</code>, <code>options</code>. <code>Record</code> může obsahovat následující pole:<ul>   <li><code>Format</code>: Hodnota typu <code>text</code> udávající formát, který se má použít. Další informace najdete na https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechání tohoto pole nebo zadání hodnoty <code>null</code> způsobí, že se datum parsuje podle nejvhodnějšího postupu.</li>   <li><code>Culture</code>: Pokud nemá <code>Format</code> hodnotu null, řídí některé specifikátory formátu jazyková verze <code>Culture</code>. Například u <code>"en-US"</code> má <code>"MMM"</code> hodnotu <code>"Jan", "Feb", "Mar", ...</code>, zatímco u <code>"ru-RU"</code> má <code>"MMM"</code> hodnotu <code>"янв", "фев", "мар", ...</code>. Když má hodnota <code>Format</code> hodnotu <code>null</code>, řídí výchozí formát, který se má použít, jazyková verze <code>Culture</code>. Když má <code>Culture</code> hodnotu <code>null</code> nebo není zadaná, použije se <code>Culture.Current</code>.</li></ul>Pokud chcete podporovat starší pracovní postupy, může být <code>options</code> také textová hodnota. Chování bude stejné jako kdyby se <code>options</code><code> = [Format = null, Culture= <code>options</code>]</code>.


## Examples

### Example #1 
Převede řetězec &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; na hodnotu datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Převede řetězec &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; na hodnotu datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Převede řetězec &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; na hodnotu datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Převede řetězec &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; na hodnotu datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
