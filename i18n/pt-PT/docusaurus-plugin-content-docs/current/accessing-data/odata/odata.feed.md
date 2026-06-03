---
title: OData.Feed
---

# OData.Feed


Devolve uma tabela dos feeds de OData oferecidos por um serviço OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Devolve uma tabela de feeds OData disponibilizados por um serviço OData a partir de um URI `serviceUri`, cabeçalhos `headers`. Pode ser especificado um valor booleano que indica se devem ser utilizadas ligações simultâneas ou um parâmetro de registo opcional, `options`, para controlar as seguintes opções:

-   `Query`: adiciona programaticamente parâmetros de consulta ao URL sem ter de se preocupar com o escape.
-   `Headers`: se este valor for especificado como um registo, fornecerá cabeçalhos adicionais a um pedido HTTP.
-   `ExcludedFromCacheKey`: se este valor for especificado como uma lista, excluirá estas chaves de cabeçalho HTTP de fazerem parte do cálculo para colocar dados em cache.
-   `ApiKeyName`: se o site de destino tiver a noção de uma chave de API, este parâmetro pode ser utilizado para especificar o nome (e não o valor) do parâmetro de chave que tem de ser utilizado no URL. O valor real da chave é fornecido na credencial.
-   `Timeout`: se este valor for especificado como uma duração, alterará o tempo limite de um pedido HTTP. O valor predefinido é 600 segundos.
-   `EnableBatch`: um valor lógico (true/false) que define se deve ser permitida a geração de um pedido OData $batch se o MaxUriLength for excedido (o valor predefinido é false).
-   `MaxUriLength`: um número que indica o comprimento máximo de um URI permitido enviado para um serviço OData. Se for excedido e EnableBatch for true, o pedido será efetuado para um ponto final OData $batch; caso contrário, falhará (o valor predefinido é 2048).
-   `Concurrent`: um valor lógico (true/false) que, quando definido como true, faz com que os pedidos ao serviço sejam efetuados em simultâneo. Quando definido como false, os pedidos serão efetuados sequencialmente. Quando não especificado, o valor será determinado pela anotação AsynchronousRequestsSupported do serviço. Se o serviço não especificar se AsynchronousRequestsSupported é suportado, os pedidos serão efetuados sequencialmente.
-   `ODataVersion`: um número (3 ou 4) que especifica a versão do protocolo OData a utilizar para este serviço OData. Quando não especificado, serão pedidas todas as versões suportadas. A versão do serviço será determinada pelo cabeçalho OData-Version devolvido pelo serviço.
-   `FunctionOverloads`: um valor lógico (true/false) que, quando definido como true, faz com que as sobrecargas de importação de funções sejam listadas no navegador como entradas separadas; quando definido como false, as sobrecargas de importação de funções serão listadas como uma única função de união no navegador. Valor predefinido para V3: false. Valor predefinido para V4: true.
-   `MoreColumns`: um valor lógico (true/false) que, quando definido como true, adiciona uma coluna "Mais Colunas" a cada feed de entidade que contenha tipos abertos e tipos polimórficos. Esta coluna conterá os campos não declarados no tipo base. Quando false, este campo não está presente. O valor predefinido é false.
-   `IncludeAnnotations`: uma lista separada por vírgulas de nomes ou padrões de termos qualificados por espaço de nomes a incluir, com "\*" como caráter universal. Por predefinição, nenhuma das anotações é incluída.
-   `IncludeMetadataAnnotations`: uma lista separada por vírgulas de nomes ou padrões de termos qualificados por espaço de nomes a incluir em pedidos de documentos de metadados, com "\*" como caráter universal. Por predefinição, inclui as mesmas anotações que IncludeAnnotations.
-   `OmitValues`: permite que o serviço OData evite escrever determinados valores nas respostas. Se for reconhecido pelo serviço, iremos inferir esses valores a partir dos campos omitidos. As opções incluem:
    -   `ODataOmitValues.Nulls`: permite que o serviço OData omita valores nulos.
-   `Implementation`: especifica a implementação do Conector de OData a utilizar. Os valores válidos são "2.0" ou null.


## Examples

### Example #1
Ligue ao serviço TripPin OData.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
