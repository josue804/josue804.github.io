# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Dir.glob("#{Rails.root}/app/assets/images/**/").each do |path|
  Rails.application.config.assets.paths << path
end
Dir.glob("#{Rails.root}/app/assets/stylesheets/**/").each do |path|
  Rails.application.config.assets.paths << path
end
Dir.glob("#{Rails.root}/app/assets/vendor/**/**").each do |path|
  Rails.application.config.assets.paths << path
end

Rails.application.config.assets.precompile += %w( custom.css )
Rails.application.config.assets.precompile += %w( demo.css )
Rails.application.config.assets.precompile += %w( home.css )
Rails.application.config.assets.precompile += %w( responsive.css )
Rails.application.config.assets.precompile += %w( rs-plugin-styles.css )
Rails.application.config.assets.precompile += %w( theme-base.css )
Rails.application.config.assets.precompile += %w( theme-elements.css )
Rails.application.config.assets.precompile += %w(*.css, *.scss)
Rails.application.config.assets.precompile += %w(*.js)
Rails.application.config.assets.precompile += %w(*.jpg, *.png, *svg)
