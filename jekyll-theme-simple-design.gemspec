# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-simple-design"
  spec.version       = "0.4.5"
  spec.authors       = ["andydevs"]
  spec.email         = ["akanshul97@gmail.com"]

  spec.summary       = "Brutally simple web design for blogs and other content-based sites"
  spec.homepage      = "https://github.com/andydevs/jekyll-theme-simple-design"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"

  spec.add_development_dependency "bundler", "~> 2.1"
  spec.add_development_dependency "rake", "~> 12.0"
end
