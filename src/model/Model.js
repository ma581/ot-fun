export function toModel(data) {
  return data.map(item => ({
    symbol: item.target.gene_info.symbol,
    geneId: item.target.id,
    geneName: item.target.gene_info.name,
    overallAssociationScore: item.association_score.overall,
    associatonScores: {
      literature: item.association_score.datatypes.literature,
      rnaExpression: item.association_score.datatypes.rna_expression,
      geneticAssociation: item.association_score.datatypes.genetic_association,
      somaticMutation: item.association_score.datatypes.somatic_mutation,
      knownDrug: item.association_score.datatypes.known_drug,
      animalModel: item.association_score.datatypes.animal_model,
      affectedPathway: item.association_score.datatypes.affected_pathway
    }
  }));
}
