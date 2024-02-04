---
title: OData.Feed
---

# OData.Feed


## Description

Devolve uma tabela dos feeds de OData oferecidos por um serviço OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Devolve uma tabela de feeds OData oferecida por um serviço OData a partir de um URI <code>serviceUri</code>, cabeçalhos <code>headers</code>. Pode ser especificado um valor booleano que indica se devem ser utilizadas ligações simultâneas ou pode ser especificado um parâmetro de registo opcional, <code>options</code>, para controlar as seguintes opções:    <ul>   <li><code>Consulta</code>: adicione parâmetros de consulta ao URL através de programação sem ter de se preocupar com operações de escape. </li>    <li> <code>Cabeçalhos</code>: a especificação deste valor como um registo vai fornecer cabeçalhos adicionais a um pedido HTTP.</li>    <li> <code>ExcludedFromCacheKey</code>: a especificação deste valor como uma lista vai excluir estas chaves de cabeçalho HTTP do cálculo da colocação de dados em cache.</li>    <li> <code>ApiKeyName</code>: se o site de destino tiver uma noção de uma chave de API, este parâmetro pode ser utilizado para especificar o nome (não o valor) do parâmetro de chave que tem de ser utilizado no URL. O valor da chave real é indicado na credencial.</li>    <li> <code>Tempo limite</code>: a especificação deste valor como uma duração irá alterar o tempo limite de um pedido HTTP. O valor predefinido é de 600 segundos.</li>    <li> <code>EnableBatch</code>: um valor lógico (verdadeiro/falso) que define se é permitida a geração de um pedido $batch OData se o MaxUriLength for excedido (o valor predefinido é falso).</li>    <li> <code>MaxUriLength</code>: um número que indica o comprimento máximo de um URI permitido enviado para um serviço OData. Se for excedido e se o EnableBatch for verdadeiro, o pedido irá ser feito a um ponto final $batch OData. Caso contrário, irá falhar (o valor predefinido é 2048).</li>    <li> <code>Em simultâneo</code>: Quando um valor lógico (verdadeiro/falso) for definido como verdadeiro, os pedidos ao serviço serão efetuados em simultâneo. Quando definido como falso, os pedidos serão efetuados sequencialmente. Quando não estiver especificado, o valor será determinado pela anotação AsynchronousRequestsSupported do serviço. Se o serviço não especificar se AsynchronousRequestsSupported é suportada, os pedidos serão efetuados sequencialmente.</li>    <li> <code>ODataVersion</code>: um número (3 ou 4) que especifica a versão do protocolo OData a utilizar neste serviço OData. Quando não for especificado, todas as versões suportadas serão pedidas. A versão do serviço será determinada pelo cabeçalho OData-Version devolvido pelo serviço.</li>    <li> <code>FunctionOverloads</code>: quando um valor lógico (verdadeiro/falso) for definido como verdadeiro, as sobrecargas de importação de funções serão listadas no navegador como entradas separadas. Quando definido como falso, as sobrecargas de importação de funções serão listadas como uma função union no navegador. Valor predefinido do V3: falso. Valor predefinido do V4: verdadeiro.</li>    <li> <code>MoreColumns</code> : um valor lógico (verdadeiro/falso) definido como verdadeiro adiciona uma coluna "Mais Colunas" a cada feed de entidade que contenha tipos abertos e tipos polimórficos. Aqui estarão contidos os campos não declarados no tipo base. Quando definido como falso, este campo não estará presente. O valor predefinido é falso.</li>    <li> <code>IncludeAnnotations</code> : uma lista de nomes ou padrões de termos qualificados de espaços de nomes separados por vírgulas, com "\*" como um caráter universal. Por predefinição, nenhuma das anotações está incluída.</li>    <li> <code>IncludeMetadataAnnotations</code> : uma lista de nomes ou padrões de termos qualificados de espaços de nomes separados por vírgulas a incluir em pedidos de documentos com metadados, com "\*" como carácter universal. Por predefinição, inclui as mesmas anotações que IncludeAnnotations.</li>    <li> <code>OmitValues</code>: permite que o serviço OData evite escrever determinados valores em respostas. Se reconhecidos, iremos inferir esses valores dos campos omitidos. As opções incluem:      <ul>        <li><code>ODataOmitValues.Nulls</code> : permite que o serviço OData omita valores nulos.</li>      </ul>    </li>    <li> <code>Implementação</code> : especifica a implementação do conetor OData a utilizar. Os valores válidos são "2.0" ou nulo.</li>    </ul>


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
