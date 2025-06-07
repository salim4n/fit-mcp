

export const generateCourseList = () => {
    return `Génère une liste de courses organisée pour le plan de repas

            Organise la liste par catégories:
            - Fruits et Légumes 
            - Viandes et Poissons
            - Produits Laitiers
            - Féculents et Céréales
            - Épicerie
            - Condiments et Épices

            Pour chaque ingrédient, indique:
            - La quantité nécessaire
            - L'unité de mesure appropriée

            Tu dois répondre UNIQUEMENT avec un JSON valide suivant strictement cette structure:
            {{
              "groceryList": {{
                "fruitsEtLegumes": [
                  {{ "name": "nom de l'ingrédient", "quantity": "nombre", "unit": "unité" }}
                ],
                "viandesEtPoissons": [
                  {{ "name": "nom de l'ingrédient", "quantity": "nombre", "unit": "unité" }}
                ],
                "produitsLaitiers": [
                  {{ "name": "nom de l'ingrédient", "quantity": "nombre", "unit": "unité" }}
                ],
                "feculentsEtCereales": [
                  {{ "name": "nom de l'ingrédient", "quantity": "nombre", "unit": "unité" }}
                ],
                "epicerie": [
                  {{ "name": "nom de l'ingrédient", "quantity": "nombre", "unit": "unité" }}
                ],
                "condimentsEtEpices": [
                  {{ "name": "nom de l'ingrédient", "quantity": "nombre", "unit": "unité" }}
                ]
		}}
		}}`
}

export const generateDailyMeals = () => {
    console.log("generer les repas");
    return `
    En tant que chef cuisinier expert en nutrition, ta mission est de créer un plan alimentaire plein de variété et de qualité alimentaire respectant précisément les objectifs nutritionnels suivants :

Objectifs quotidiens stricts  :
- Calories totales : 
- Protéines : 
- Glucides : 
- Lipides : 

Restrictions alimentaires :
- Régime alimentaire : 
- Intolérances/Aliments à éviter : 
- Inclure le petit-déjeuner : 

Repas déjà utilisés (À ÉVITER) :

Directives pour la création du plan :
1. VARIÉTÉ CULINAIRE
	Intègre des plats inspirés des cuisines suivantes pour une variété variée et authentique des plats plein de vie et du gout, dans un ordre totalement aléatoire :
	- Cuisine francaise traditionnelle et moderne
	- Cuisine méditerranéenne (grecque, espagnole, libanaise)
	- Cuisine italienne authentique
	- Cuisine asiatique (japonaise, thaïlandaise, vietnamienne)

2. RÈGLES DE COMPOSITION
	- NE JAMAIS répéter un plat déjà utilisé dans la liste "Repas déjà utilisés"
	- Chaque repas doit être nutritionnellement équilibré
	- Utilise des ingrédients de saison et facilement accessibles
	- Spécifie les quantités précises en grammes
	- Respecte STRICTEMENT le régime alimentaire et les restrictions indiquées
	- Évite ABSOLUMENT tous les aliments listés dans les intolérances
	- Évite ABSOLUMENT les répetitions de types de plats par exemple si un plat contient "bowl" dans son titre,tu n'utilises pas de plat contenant "bowl"

3. STRUCTURE QUOTIDIENNE
	Chaque journée doit inclure :
	- Petit-déjeuner (optionnel, 25-30% des calories quotidiennes si présent)
	- Déjeuner (45-50% des calories quotidiennes si pas de petit-déjeuner, sinon 35-40%)
	- Dîner (45-50% des calories quotidiennes si pas de petit-déjeuner, sinon 25-30%)
	- Collation optionnelle (10-15% des calories restantes)

4. INSTRUCTIONS DE PRÉPARATION
	Pour chaque recette, inclure dans la description :
	1. Temps de préparation et de cuisson
	2. Instructions étape par étape numérotées
	3. Conseils de préparation et astuces
	4. Méthode de cuisson détaillée (température, durée)
	5. Indications sur le matériel nécessaire
	6. Conseils de conservation si pertinent

5. SPÉCIFICATIONS TECHNIQUES
	- Détaille PRÉCISÉMENT chaque ingrédient (pas de "légumes variés" ou "fruits de saison")
	- Indique les méthodes de cuisson
	- Fournis les macronutriments exacts pour chaque repas

	FORMAT DE RÉPONSE :
	Réponds UNIQUEMENT avec un objet JSON valide suivant strictement cette structure (remplace les valeurs "nombre" par des nombres réels) :

	{{
	"dailyPlan": {{
		"breakfast": {{
		"name": "Nom explicite du repas",
		"description": "Temps de préparation: X min | Temps de cuisson: Y min\\n\\n1. Première étape...\\n2. Deuxième étape...\\n3. Troisième étape...\\n\\nAstuces: ...\\nConservation: ...",
		"calories": "nombre",
		"macros": {{
			"protein": "nombre",
			"carbs": "nombre",
			"fats": "nombre"
			}},
		"ingredients": ["ingrédient 1 avec quantité", "ingrédient 2 avec quantité"]
			}},
		"lunch": {{
		"name": "Nom explicite du repas",
		"description": "Temps de préparation: X min | Temps de cuisson: Y min\\n\\n1. Première étape...\\n2. Deuxième étape...\\n3. Troisième étape...\\n\\nAstuces: ...\\nConservation: ...",
		"calories": "nombre",
		"macros": {{
			"protein": "nombre",
			"carbs": "nombre",
			"fats": "nombre"
			}},
		"ingredients": ["ingrédient 1 avec quantité", "ingrédient 2 avec quantité"]
			}},
		"dinner": {{
		"name": "Nom explicite du repas",
		"description": "Temps de préparation: X min | Temps de cuisson: Y min\\n\\n1. Première étape...\\n2. Deuxième étape...\\n3. Troisième étape...\\n\\nAstuces: ...\\nConservation: ...",
		"calories": "nombre",
		"macros": {{
			"protein": "nombre",
			"carbs": "nombre",
			"fats": "nombre"
			}},
		"ingredients": ["ingrédient 1 avec quantité", "ingrédient 2 avec quantité"]
			}},
		"snack": {{
		"name": "Nom explicite du repas (optionnel)",
		"description": "Temps de préparation: X min | Temps de cuisson: Y min\\n\\n1. Première étape...\\n2. Deuxième étape...\\n3. Troisième étape...\\n\\nAstuces: ...\\nConservation: ...",
		"calories": "nombre",
		"macros": {{
			"protein": "nombre",
			"carbs": "nombre",
			"fats": "nombre"
		}},
		"ingredients": ["ingrédient 1 avec quantité", "ingrédient 2 avec quantité"]
			}}
			}}
			}}
		}}
	}`
}

