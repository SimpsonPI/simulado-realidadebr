const allQuestions = [
     // Questões de Direito Administrativo - Nível Médio - Banca FGV
    // Princípios da Administração Pública
    {
        question: "1. (FGV) O princípio da legalidade, para a Administração Pública, diferencia-se do princípio da legalidade para os particulares, pois, no caso da Administração, exige que ela só atue quando:",
        options: ["A) a lei expressamente o autorizar.", "B) não houver proibição legal expressa.", "C) a moralidade permitir.", "D) o interesse público for preservado.", "E) houver aprovação judicial prévia."],
        answer: "A"
    },
    {
        question: "2. (FGV) A exigência de concurso público para o provimento de cargos efetivos e empregos públicos atende diretamente ao princípio da:",
        options: ["A) Moralidade.", "B) Publicidade.", "C) Impessoalidade.", "D) Eficiência.", "E) Finalidade."],
        answer: "C"
    },
    {
        question: "3. (FGV) O princípio que veda a promoção pessoal de agentes públicos em publicidade de atos, programas, obras e serviços governamentais é o da:",
        options: ["A) Legalidade.", "B) Impessoalidade.", "C) Eficiência.", "D) Supremacia do interesse público.", "E) Autotutela."],
        answer: "B"
    },
    {
        question: "4. (FGV) A prerrogativa de a Administração Pública revogar seus próprios atos, quando inoportunos ou inconvenientes, está relacionada ao princípio da:",
        options: ["A) Autotutela.", "B) Vinculação.", "C) Legalidade.", "D) Razoabilidade.", "E) Proporcionalidade."],
        answer: "A"
    },
    {
        question: "5. (FGV) A motivação, como princípio implícito, é obrigatória para atos administrativos que:",
        options: ["A) revoguem outros atos.", "B) demitam um servidor.", "C) anulem um ato.", "D) todas as alternativas estão corretas.", "E) todas as alternativas estão incorretas."],
        answer: "D"
    },
    {
        question: "6. (FGV) A atuação da Administração Pública deve ser guiada pela busca do melhor desempenho possível, de forma a garantir a melhor relação custo-benefício. Este conceito está ligado ao princípio da:",
        options: ["A) Legalidade.", "B) Impessoalidade.", "C) Moralidade.", "D) Eficiência.", "E) Publicidade."],
        answer: "D"
    },
    {
        question: "7. (FGV) A publicidade dos atos administrativos, como princípio, não exige a divulgação de atos que possam comprometer a segurança da sociedade e do Estado. Esta exceção é um reflexo direto do princípio da:",
        options: ["A) Moralidade.", "B) Razoabilidade.", "C) Proporcionalidade.", "D) Supremacia do interesse público.", "E) Autotutela."],
        answer: "D"
    },
    {
        question: "8. (FGV) O princípio da moralidade administrativa, conforme a jurisprudência, possui autonomia em relação à moral comum, exigindo que o agente público atue com:",
        options: ["A) Honestidade e retidão, independentemente da lei.", "B) Boa-fé, lealdade e probidade.", "C) Discricionariedade absoluta.", "D) Impessoalidade, mesmo que em detrimento do interesse público.", "E) Eficiência, a qualquer custo."],
        answer: "B"
    },
    {
        question: "9. (FGV) A indisponibilidade do interesse público é um princípio fundamental que determina que a Administração Pública:",
        options: ["A) não pode renunciar a poderes ou prerrogativas em favor do particular.", "B) deve sempre priorizar o interesse privado em detrimento do público.", "C) tem a liberdade de dispor do patrimônio público.", "D) não pode fiscalizar atividades privadas.", "E) é livre para escolher se irá ou não atender a lei."],
        answer: "A"
    },
    {
        question: "10. (FGV) O controle externo da Administração Pública, exercido pelo Poder Legislativo com auxílio dos Tribunais de Contas, visa a verificar a:",
        options: ["A) legalidade, a legitimidade e a economicidade dos atos e contratos.", "B) moralidade e a eficiência, mas não a legalidade.", "C) discricionariedade do administrador.", "D) apenas a legalidade formal dos atos.", "E) a conveniência e oportunidade dos atos."],
        answer: "A"
    },
    // Atos Administrativos
    {
        question: "11. (FGV) A presunção de legitimidade e veracidade dos atos administrativos implica que:",
        options: ["A) os atos são válidos até que se prove o contrário.", "B) os atos só podem ser revogados pelo Poder Judiciário.", "C) os atos são vinculados e não podem ser anulados.", "D) os atos são discricionários em todos os seus elementos.", "E) a Administração não pode anular seus próprios atos."],
        answer: "A"
    },
    {
        question: "12. (FGV) O poder-dever da Administração de anular seus próprios atos, quando eivados de ilegalidade, decorre do princípio da:",
        options: ["A) legalidade.", "B) publicidade.", "C) autotutela.", "D) eficiência.", "E) moralidade."],
        answer: "C"
    },
    {
        question: "13. (FGV) A convalidação é o ato administrativo pelo qual se sana vício em outro ato administrativo. Quais elementos do ato podem ser convalidados?",
        options: ["A) Motivo e finalidade.", "B) Objeto e forma.", "C) Forma e competência.", "D) Apenas o objeto.", "E) Apenas o motivo."],
        answer: "C"
    },
    {
        question: "14. (FGV) A extinção do ato administrativo por razões de mérito, conveniência e oportunidade é a:",
        options: ["A) Anulação.", "B) Revogação.", "C) Cassação.", "D) Caducidade.", "E) Contraposição."],
        answer: "B"
    },
    {
        question: "15. (FGV) O atributo do ato administrativo que permite à Administração executá-lo diretamente, sem a necessidade de intervenção do Poder Judiciário, é a:",
        options: ["A) Presunção de veracidade.", "B) Imperatividade.", "C) Tipicidade.", "D) Autoexecutoriedade.", "E) Coercibilidade."],
        answer: "D"
    },
    {
        question: "16. (FGV) Qual dos seguintes elementos não é considerado um requisito do ato administrativo?",
        options: ["A) Competência.", "B) Forma.", "C) Objeto.", "D) Oportunidade.", "E) Finalidade."],
        answer: "D"
    },
    {
        question: "17. (FGV) O ato administrativo que, por vício de legalidade, é extinto retroativamente (ex tunc), é o ato:",
        options: ["A) revogado.", "B) anulado.", "C) convalidado.", "D) cassado.", "E) caduco."],
        answer: "B"
    },
    {
        question: "18. (FGV) A exteriorização da vontade do administrador, que deve seguir a forma prevista em lei, é o elemento do ato administrativo denominado:",
        options: ["A) Motivo.", "B) Forma.", "C) Competência.", "D) Objeto.", "E) Finalidade."],
        answer: "B"
    },
    {
        question: "19. (FGV) O desvio de finalidade na prática de um ato administrativo é um vício de legalidade que implica sua:",
        options: ["A) Revogação.", "B) Anulação.", "C) Cassação.", "D) Suspensão.", "E) Alteração."],
        answer: "B"
    },
    {
        question: "20. (FGV) A imperatividade do ato administrativo significa que ele:",
        options: ["A) produz efeitos jurídicos imediatamente.", "B) se impõe a terceiros, independentemente de sua concordância.", "C) está sempre previsto em lei.", "D) pode ser executado sem a intervenção judicial.", "E) deve ser motivado."],
        answer: "B"
    },
    // Poderes da Administração Pública
    {
        question: "21. (FGV) O poder-dever da Administração de aplicar sanções a servidores que cometem infrações funcionais é denominado:",
        options: ["A) Poder de Polícia.", "B) Poder Disciplinar.", "C) Poder Hierárquico.", "D) Poder Normativo.", "E) Poder Vinculado."],
        answer: "B"
    },
    {
        question: "22. (FGV) A fiscalização de estabelecimentos comerciais quanto às normas sanitárias é um exemplo de exercício do:",
        options: ["A) Poder Hierárquico.", "B) Poder Disciplinar.", "C) Poder de Polícia.", "D) Poder Regulamentar.", "E) Poder Normativo."],
        answer: "C"
    },
    {
        question: "23. (FGV) O poder da Administração de distribuir e delegar competências, bem como de rever atos de seus subordinados, é o:",
        options: ["A) Poder Disciplinar.", "B) Poder Regulamentar.", "C) Poder de Polícia.", "D) Poder Hierárquico.", "E) Poder Vinculado."],
        answer: "D"
    },
    {
        question: "24. (FGV) O poder discricionário se manifesta quando o administrador tem a liberdade de escolha entre:",
        options: ["A) uma ou mais opções previstas na lei.", "B) fazer o que a lei permite ou não.", "C) o interesse privado e o público.", "D) a ilegalidade e a legalidade.", "E) aplicar ou não uma lei."],
        answer: "A"
    },
    {
        question: "25. (FGV) Os atos normativos expedidos pelo Chefe do Poder Executivo, para fiel execução da lei, são manifestação do:",
        options: ["A) Poder de Polícia.", "B) Poder Hierárquico.", "C) Poder Regulamentar.", "D) Poder Disciplinar.", "E) Poder discricionário."],
        answer: "C"
    },
    // Organização da Administração Pública
    {
        question: "26. (FGV) A criação de uma autarquia para desempenhar uma atividade administrativa específica, dotada de personalidade jurídica de direito público, é um exemplo de:",
        options: ["A) Desconcentração administrativa.", "B) Descentralização por serviços.", "C) Centralização administrativa.", "D) Privatização.", "E) Descentralização por colaboração."],
        answer: "B"
    },
    {
        question: "27. (FGV) A distribuição interna de competências entre órgãos de uma mesma pessoa jurídica, sem a criação de nova pessoa, é a:",
        options: ["A) Descentralização.", "B) Desconcentração.", "C) Privatização.", "D) Federalização.", "E) Estatização."],
        answer: "B"
    },
    {
        question: "28. (FGV) São características de uma sociedade de economia mista:",
        options: ["A) Personalidade jurídica de direito público, criada por lei específica e capital totalmente público.", "B) Personalidade jurídica de direito privado, capital público e privado e criação por lei de autorização.", "C) Personalidade jurídica de direito público e subordinação ao ente que a criou.", "D) Autonomia administrativa, financeira e patrimonial, mas sem personalidade jurídica própria.", "E) Atuação em regime de monopólio e sem concorrência."],
        answer: "B"
    },
    {
        question: "29. (FGV) Integram a Administração Pública Indireta:",
        options: ["A) Ministérios e Secretarias.", "B) Autarquias, fundações públicas e empresas públicas.", "C) O Poder Legislativo e o Poder Judiciário.", "D) Assessorias e subsecretarias.", "E) Apenas as empresas privadas que prestam serviços públicos."],
        answer: "B"
    },
    {
        question: "30. (FGV) O controle finalístico exercido pela Administração Direta sobre a Indireta é o chamado:",
        options: ["A) Controle hierárquico.", "B) Poder disciplinar.", "C) Tutela ou supervisão ministerial.", "D) Controle de mérito.", "E) Controle interno."],
        answer: "C"
    },
    // Agentes Públicos
    {
        question: "31. (FGV) A investidura em cargo ou emprego público depende de:",
        options: ["A) Livre nomeação pelo Chefe do Executivo.", "B) Aprovação prévia em concurso público de provas ou de provas e títulos.", "C) Indicação política.", "D) Experiência profissional comprovada.", "E) Nenhuma das alternativas."],
        answer: "B"
    },
    {
        question: "32. (FGV) A estabilidade é um direito do servidor público que adquire, após:",
        options: ["A) dois anos de efetivo exercício em cargo efetivo.", "B) três anos de efetivo exercício em cargo efetivo.", "C) aprovação em estágio probatório, independentemente do tempo.", "D) um ano de exercício em cargo comissionado.", "E) cinco anos em qualquer cargo público."],
        answer: "B"
    },
    {
        question: "33. (FGV) O cargo em comissão é aquele que se destina a funções de:",
        options: ["A) Carreira.", "B) Confiança, de livre nomeação e exoneração.", "C) Permanência e estabilidade.", "D) Natureza técnica, para o qual se exige concurso.", "E) Atribuições específicas, mas sem poder hierárquico."],
        answer: "B"
    },
    {
        question: "34. (FGV) O estágio probatório para o servidor público nomeado para cargo de provimento efetivo tem a duração de:",
        options: ["A) 12 meses.", "B) 24 meses.", "C) 36 meses.", "D) 48 meses.", "E) 60 meses."],
        answer: "C"
    },
    {
        question: "35. (FGV) A perda do cargo por um servidor público estável somente pode ocorrer:",
        options: ["A) por decisão de juiz sem trânsito em julgado.", "B) mediante processo administrativo em que lhe seja assegurada ampla defesa.", "C) por simples ato discricionário da autoridade superior.", "D) por qualquer motivo, desde que seja de interesse público.", "E) após 3 anos de exercício."],
        answer: "B"
    },
    // Licitação e Contratos Administrativos
    {
        question: "36. (FGV) Segundo a Lei nº 14.133/2021, o princípio que veda a escolha de critérios ou eventos que comprometam o caráter competitivo do processo licitatório é o da:",
        options: ["A) Legalidade.", "B) Isonomia.", "C) Vinculação ao instrumento convocatório.", "D) Julgamento objetivo.", "E) Competitividade."],
        answer: "E"
    },
    {
        question: "37. (FGV) A modalidade de licitação obrigatória para contratação de bens e serviços comuns, cujo critério de julgamento é o menor preço ou o maior desconto, é o:",
        options: ["A) Concorrência.", "B) Tomada de Preços.", "C) Convite.", "D) Leilão.", "E) Pregão."],
        answer: "E"
    },
    {
        question: "38. (FGV) Qual das seguintes hipóteses pode levar à inexigibilidade de licitação?",
        options: ["A) Contratação de serviço de publicidade.", "B) Obras de pequeno valor.", "C) Contratação de profissional de notória especialização, desde que único.", "D) Compra de material de expediente.", "E) Contratação de serviços de engenharia."],
        answer: "C"
    },
    {
        question: "39. (FGV) As cláusulas exorbitantes, que conferem à Administração Pública poderes especiais nos contratos administrativos, incluem a prerrogativa de:",
        options: ["A) Alterar unilateralmente o contrato.", "B) Pagar fora do prazo legal.", "C) Exigir que o particular não fiscalize a execução.", "D) Rescindir o contrato por vontade do particular.", "E) Não pagar indenização em caso de rescisão unilateral."],
        answer: "A"
    },
    {
        question: "40. (FGV) A rescisão unilateral do contrato pela Administração Pública é uma manifestação direta do princípio da:",
        options: ["A) Legalidade.", "B) Supremacia do interesse público.", "C) Publicidade.", "D) Eficiência.", "E) Impessoalidade."],
        answer: "B"
    },
    // Responsabilidade Civil do Estado
    {
        question: "41. (FGV) A responsabilidade civil do Estado por danos causados a terceiros por seus agentes, nessa qualidade, é, em regra,:",
        options: ["A) subjetiva, baseada na culpa do serviço.", "B) subjetiva, exigindo dolo ou culpa do agente.", "C) objetiva, baseada na teoria do risco integral.", "D) objetiva, baseada na teoria do risco administrativo.", "E) inexistente, pois o agente responde pessoalmente."],
        answer: "D"
    },
    {
        question: "42. (FGV) Para que o Estado seja responsabilizado objetivamente por um dano, é necessária a comprovação de:",
        options: ["A) dolo do agente público.", "B) culpa do agente público.", "C) dolo ou culpa da vítima.", "D) o nexo de causalidade entre a conduta e o dano.", "E) a ilegalidade do ato administrativo."],
        answer: "D"
    },
    {
        question: "43. (FGV) O direito de regresso do Estado contra o agente público, em caso de condenação por dano a terceiro, depende da comprovação de:",
        options: ["A) ilegalidade do ato.", "B) dolo ou culpa do agente.", "C) apenas a existência do dano.", "D) que o agente agiu no exercício de sua função.", "E) que o ato foi discricionário."],
        answer: "B"
    },
    {
        question: "44. (FGV) A responsabilidade do Estado por omissão é, em regra,:",
        options: ["A) objetiva, baseada no risco administrativo.", "B) subjetiva, baseada na teoria da culpa do serviço.", "C) objetiva, baseada no risco integral.", "D) inexistente.", "E) sempre solidária com a do agente."],
        answer: "B"
    },
    // Bens Públicos
    {
        question: "45. (FGV) Um edifício de uma es
(Content truncated due to size limit. Use page ranges or line ranges to read remaining content)