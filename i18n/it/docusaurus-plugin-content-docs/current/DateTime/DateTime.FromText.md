---
title: DateTime.FromText
---

# DateTime.FromText


Crea un valore datetimezone dai formati datetime locale e universale.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Crea un valore <code>datetime</code> da una rappresentazione testuale <code>text</code>. È possibile specificare un parametro facoltativo <code>record</code>, <code>options</code>, per specificare proprietà aggiuntive. Il <code>record</code> può contenere i campi seguenti:<ul>   <li><code>Formato</code>: valore <code>text</code> che indica il formato da usare. Per maggiori informazioni, vai a: https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica <code>null</code> verrà eseguita l'analisi della data con il massimo impegno.</li>   <li><code>Impostazioni cultura</code>: quando <code>Formato</code> non è Null, <code>Impostazioni cultura</code> controlla alcuni identificatori di formato. Ad esempio, in <code>"en-US"</code> <code>"MMM"</code> è <code>"Jan", "Feb", "Mar", ... </code>, mentre in <code>"ru-RU"</code> <code>"MMM"</code> è <code>"янв", "фев", "мар", ...</code>. Quando <code>Formato</code> è <code>null</code>, <code>Impostazioni cultura</code> controlla il formato predefinito da usare. Quando <code>Impostazioni cultura</code> è <code>null</code> od omesso, viene usato <code>Culture.Current</code>.</li></ul>Per supportare i flussi di lavoro legacy, <code>options</code> può essere anche un valore di testo. Questo comportamento è identico a quello di <code>options</code><code>= [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Convertire &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; in un valore datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Convertire &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; in un valore datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Convertire &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; in un valore datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Convertire &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; in un valore datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
