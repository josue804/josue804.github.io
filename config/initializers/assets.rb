# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Dir.glob("#{Rails.root}/app/assets/images/").each do |path|
  Rails.application.config.assets.paths << path
end
Dir.glob("#{Rails.root}/app/assets/images/**/").each do |path|
  Rails.application.config.assets.paths << path
end
Dir.glob("#{Rails.root}/app/assets/images/**/**/").each do |path|
  Rails.application.config.assets.paths << path
end

Dir.glob("#{Rails.root}/app/assets/fonts/**/").each do |path|
  Rails.application.config.assets.paths << path
end
Dir.glob("#{Rails.root}/app/assets/homepages/**/**/**").each do |path|
  Rails.application.config.assets.paths << path
end
Dir.glob("#{Rails.root}/app/assets/vendor/").each do |path|
  Rails.application.config.assets.paths << path
end
Dir.glob("#{Rails.root}/app/assets/vendor/**/").each do |path|
  Rails.application.config.assets.paths << path
end
Dir.glob("#{Rails.root}/app/assets/vendor/**/**/").each do |path|
  Rails.application.config.assets.paths << path
end

Rails.application.config.assets.precompile += %w(*.css, *.scss)
Rails.application.config.assets.precompile += %w(*.js)
Rails.application.config.assets.precompile += %w(*.jpg *.png .*svg)
Rails.application.config.assets.precompile += %w(*.eot, *.ttf, *.woff, *.woff2)
