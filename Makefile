# Build and deployment scripts

# Build the site
build:
	npm run build

# Preview the built site locally
preview:
	npm run preview

# Deploy to GitHub Pages (triggered automatically on push to main)
deploy:
	@echo "Deployment is handled automatically by GitHub Actions"
	@echo "Push your changes to the main branch to trigger deployment"

.PHONY: build preview deploy
