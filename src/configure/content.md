# Configuration du contenu 

La section **Contenu** vous permet de personnaliser le comportement du frontend, les bannières promotionnelles et de contrôler les fonctionnalités avancées telles que les règles de spéculation et les scripts personnalisés. Ces paramètres permettent d'optimiser l'expérience utilisateur et d'adapter la vitrine en fonction des besoins spécifiques de l'entreprise. 

**Étapes pour configurer les paramètres de contenu** 

Pour mettre à jour la configuration du **Contenu** dans ExalandStore : 

1. Connectez-vous au **Panneau d'administration**. 
2. Accédez à **Configurer → Contenu**. 
3. Vous trouverez les options suivantes à configurer : 

### Titre de l'offre d'en-tête 

Affichez une bannière promotionnelle sur l’en-tête de la vitrine. 

- **Titre de l'offre** 
Exemple : « Obtenez JUSQU'À 40 % DE RÉDUCTION sur votre 1ère commande » 

- **Titre de redirection** 
Exemple : « ACHETER MAINTENANT » 

- **Lien de redirection** 
Saisissez une URL valide (par exemple, « /products/sale ») 

<ImagePopup src="/images/configure/header.png" alt="Header Offer Title" /> 

### Règles de spéculation 

Ces règles améliorent les performances perçues en prélevant ou en prérendu intelligemment les pages. 

- **Activer les règles de spéculation** 
Basculez pour activer la logique globale de spéculation. 

- **Activer les règles de spéculation avant le rendu** 
Permet le prérendu basé sur les prédictions du comportement des utilisateurs. 

- **Ignorer les URL de pré-rendu** 
Excluez des routes spécifiques du prérendu en utilisant le tube `|` comme séparateur. 
Exemple : `compte|checkout|onepage|cart` 

- **Ignorer les paramètres d'URL de pré-rendu** 
Excluez certains paramètres d'URL de la logique de pré-rendu. 
Exemple : `ref|token` 

- **Niveau d'impatience avant le rendu** 
Choisissez l'intensité du prérendu : 
- `eager` : prérendu maximum (plus de ressources) 
- `modéré` : solde par défaut 
- `conservatif` : prérendu minimal 

- **Activer les règles de spéculation de prélecture** 
Active la prélecture des liens pour accélérer la navigation. 

<ImagePopup src="/images/configure/contentspec.png" alt="Speculation Rules" /> 

### Contenu protégé par les droits d'auteur 

La configuration des informations de droits d'auteur dans le pied de page de votre site Web est une étape clé pour protéger votre propriété intellectuelle et montrer clairement la propriété de votre contenu en ligne. 

En ayant un avis de droit d'auteur bien formaté, vous informez les visiteurs que le contenu, la conception, les images et autres éléments de votre site sont légalement protégés. 

Cela permet non seulement d’empêcher toute utilisation ou copie non autorisée, mais démontre également votre professionnalisme et renforce la confiance avec votre public. 

En incluant le nom de votre marque, l'année en cours et une brève déclaration de droits dans le pied de page, vous vous assurez que votre marque est visible sur chaque page de votre site Web. 

### Étapes pour ajouter du contenu Coyright 

Pour ajouter du **Contenu Coyright**, accédez au panneau d'administration : **Configurer >> Contenu**. 

Vous verrez la zone de texte pour ajouter le contenu protégé par le droit d'auteur, comme indiqué dans l'image ci-dessous. 

<ImagePopup src="/images/configure/copyright-content.png" alt="Coyright Content" /> 

Cliquez enfin sur le bouton **Enregistrer la configuration**. 

Après cela, vous pouvez accéder au pied de page de la vitrine de votre site Web ExalandStore et vérifier que votre contenu protégé par le droit d'auteur a été ajouté avec succès. 

 <ImagePopup src="/images/configure/copyright-footer.png" alt="Coyright Content" /> 

### Scripts personnalisés 

Ajoutez vos propres scripts pour améliorer ou intégrer des fonctionnalités personnalisées. 

- **CSS personnalisé** 
Ajoutez du CSS global pour styliser votre vitrine. 

- **JavaScript personnalisé** 
Insérez des scripts pour les widgets de chat, les analyses ou toute interaction personnalisée. 

<ImagePopup src="/images/configure/custom.png" alt="Custom Scripts" />
