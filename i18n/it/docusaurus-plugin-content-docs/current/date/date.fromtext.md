---
title: Date.FromText
---

# Date.FromText


Crea una data da formati date locali, universali e personalizzati.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Crea un valore <code>date</code> da una rappresentazione testuale <code>text</code>. È possibile specificare un parametro facoltativo <code>record</code>, <code>options</code>, per specificare proprietà aggiuntive. Il <code>record</code> può contenere i campi seguenti:<ul>   <li><code>Formato</code>: valore <code>text</code> che indica il formato da usare. Per maggiori informazioni, vai a: https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica <code>null</code> verrà eseguita l'analisi della data con il massimo impegno.</li>   <li><code>Impostazioni cultura</code>: quando <code>Formato</code> non è Null, <code>Impostazioni cultura</code> controlla alcuni identificatori di formato. Ad esempio, in <code>"en-US"</code> <code>"MMM"</code> è <code>"Jan", "Feb", "Mar", ... </code>, mentre in <code>"ru-RU"</code> <code>"MMM"</code> è <code>"янв", "фев", "мар", ...</code>. Quando <code>Formato</code> è <code>null</code>, <code>Impostazioni cultura</code> controlla il formato predefinito da usare. Quando <code>Impostazioni cultura</code> è <code>null</code> od omesso, viene usato <code>Culture.Current</code>.</li></ul>Per supportare i flussi di lavoro legacy, <code>options</code> può essere anche un valore di testo. Questo comportamento è identico a quello di <code>options</code><code>= [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Convertire &lt;code&gt;2010-12-31&lt;/code&gt; in un valore &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Eseguire la conversione usando un formato personalizzato e le impostazioni cultura tedesche.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Trovare la data nel calendario gregoriano che corrisponde all&#39;inizio di 1400 nel calendario Hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
