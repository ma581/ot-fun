import { sortByAssociationScore, toModel } from "./Model";

test("Should transform to model", () => {
  const data = [
    {
      target: {
        tractability: {
          smallmolecule: {
            top_category: "Discovery_Precedence",
            small_molecule_genome_member: false,
            buckets: [4],
            high_quality_compounds: 0,
            ensemble: -0.82975974,
            categories: {
              clinical_precedence: 0.0,
              predicted_tractable: 0.0,
              discovery_precedence: 0.7
            }
          },
          antibody: {
            top_category: "Predicted_Tractable__High_confidence",
            buckets: [5, 6, 7],
            categories: {
              predicted_tractable_med_low_confidence: 0.65,
              clinical_precedence: 0.0,
              predicted_tractable_high_confidence: 0.3
            }
          }
        },
        gene_info: {
          symbol: "TFPI",
          name: "tissue factor pathway inhibitor"
        },
        id: "ENSG00000003436"
      },
      association_score: {
        datatypes: {
          literature: 0.19517772984514156,
          rna_expression: 0.07211524912501942,
          genetic_association: 0.22628011248337543,
          somatic_mutation: 0.0,
          known_drug: 0.0,
          animal_model: 0.0,
          affected_pathway: 0.5
        },
        overall: 0.5827636456183956,
        datasources: {
          progeny: 0.0,
          sysbio: 0.0,
          expression_atlas: 0.07211524912501942,
          europepmc: 0.19517772984514156,
          intogen: 0.0,
          phewas_catalog: 0.0,
          uniprot_literature: 0.0,
          phenodigm: 0.0,
          eva: 0.0,
          gene2phenotype: 0.0,
          gwas_catalog: 0.22628011248337543,
          slapenrich: 0.5,
          genomics_england: 0.0,
          postgap: 0.0,
          uniprot: 0.0,
          chembl: 0.0,
          cancer_gene_census: 0.0,
          reactome: 0.0,
          uniprot_somatic: 0.0,
          eva_somatic: 0.0,
          crispr: 0.0
        }
      },
      disease: {
        efo_info: {
          therapeutic_area: {
            labels: [
              "neoplastic, precancerous and hyperplastic disease",
              "respiratory or thoracic disease"
            ],
            codes: ["MONDO_0045024", "OTAR_0000010"]
          },
          path: [
            [
              "MONDO_0045024",
              "MONDO_0023370",
              "EFO_0000616",
              "EFO_0006858",
              "EFO_0000313",
              "EFO_0001071"
            ],
            [
              "MONDO_0045024",
              "MONDO_0023370",
              "EFO_0000616",
              "EFO_0003853",
              "MONDO_0000376",
              "MONDO_0008903",
              "EFO_0001071"
            ],
            [
              "MONDO_0045024",
              "MONDO_0023370",
              "EFO_0000616",
              "EFO_0003853",
              "MONDO_0020641",
              "MONDO_0021117",
              "MONDO_0008903",
              "EFO_0001071"
            ],
            [
              "MONDO_0045024",
              "MONDO_0023370",
              "EFO_0000616",
              "EFO_0000311",
              "MONDO_0003274",
              "MONDO_0008903",
              "EFO_0001071"
            ],
            [
              "MONDO_0045024",
              "MONDO_0023370",
              "EFO_0000616",
              "EFO_0000311",
              "EFO_0000313",
              "EFO_0001071"
            ],
            [
              "MONDO_0045024",
              "MONDO_0023370",
              "EFO_0000616",
              "EFO_0000311",
              "MONDO_0000376",
              "MONDO_0008903",
              "EFO_0001071"
            ],
            [
              "MONDO_0045024",
              "MONDO_0023370",
              "EFO_0000616",
              "MONDO_0021350",
              "MONDO_0021117",
              "MONDO_0008903",
              "EFO_0001071"
            ],
            [
              "MONDO_0045024",
              "MONDO_0023370",
              "EFO_0000616",
              "MONDO_0021350",
              "MONDO_0003274",
              "MONDO_0008903",
              "EFO_0001071"
            ],
            [
              "OTAR_0000010",
              "EFO_0003818",
              "MONDO_0021117",
              "MONDO_0008903",
              "EFO_0001071"
            ],
            [
              "OTAR_0000010",
              "EFO_0000684",
              "EFO_0009433",
              "EFO_0003818",
              "MONDO_0021117",
              "MONDO_0008903",
              "EFO_0001071"
            ],
            [
              "OTAR_0000010",
              "EFO_0000684",
              "EFO_0003853",
              "MONDO_0000376",
              "MONDO_0008903",
              "EFO_0001071"
            ],
            [
              "OTAR_0000010",
              "EFO_0000684",
              "EFO_0003853",
              "MONDO_0020641",
              "MONDO_0021117",
              "MONDO_0008903",
              "EFO_0001071"
            ],
            [
              "OTAR_0000010",
              "MONDO_0021350",
              "MONDO_0021117",
              "MONDO_0008903",
              "EFO_0001071"
            ],
            [
              "OTAR_0000010",
              "MONDO_0021350",
              "MONDO_0003274",
              "MONDO_0008903",
              "EFO_0001071"
            ]
          ],
          label: "lung carcinoma"
        },
        id: "EFO_0001071"
      },
      is_direct: true,
      evidence_count: {
        datatypes: {
          literature: 15.0,
          rna_expression: 2.0,
          genetic_association: 1.0,
          somatic_mutation: 0.0,
          known_drug: 0.0,
          animal_model: 0.0,
          affected_pathway: 1.0
        },
        total: 19.0,
        datasources: {
          progeny: 0.0,
          sysbio: 0.0,
          expression_atlas: 2.0,
          europepmc: 15.0,
          intogen: 0.0,
          phewas_catalog: 0.0,
          uniprot_literature: 0.0,
          phenodigm: 0.0,
          eva: 0.0,
          gene2phenotype: 0.0,
          gwas_catalog: 1.0,
          slapenrich: 1.0,
          genomics_england: 0.0,
          postgap: 0.0,
          uniprot: 0.0,
          chembl: 0.0,
          cancer_gene_census: 0.0,
          reactome: 0.0,
          uniprot_somatic: 0.0,
          eva_somatic: 0.0,
          crispr: 0.0
        }
      },
      id: "ENSG00000003436-EFO_0001071"
    }
  ];
  const item = data[0];
  const expected = [
    {
      symbol: item.target.gene_info.symbol,
      geneId: item.target.id,
      geneName: item.target.gene_info.name,
      overallAssociationScore: item.association_score.overall,
      associationScores: {
        literature: item.association_score.datatypes.literature,
        rnaExpression: item.association_score.datatypes.rna_expression,
        geneticAssociation:
          item.association_score.datatypes.genetic_association,
        somaticMutation: item.association_score.datatypes.somatic_mutation,
        knownDrug: item.association_score.datatypes.known_drug,
        animalModel: item.association_score.datatypes.animal_model,
        affectedPathway: item.association_score.datatypes.affected_pathway
      }
    }
  ];

  expect(toModel(data)).toEqual(expected);
});

test("Should sort by highest association score", () => {
  const input = [
    { overallAssociationScore: 0 },
    { overallAssociationScore: 1 },
    { overallAssociationScore: 0.5 }
  ];

  const sorted = sortByAssociationScore(input);
  expect(sorted[0].overallAssociationScore).toBe(1);
  expect(sorted[1].overallAssociationScore).toBe(0.5);
  expect(sorted[2].overallAssociationScore).toBe(0);
});
