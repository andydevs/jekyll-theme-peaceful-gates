# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-peaceful-gates"
  spec.version       = "1.2.0"
  spec.authors       = ["andydevs"]
  spec.email         = ["akanshul97@gmail.com"]

  spec.summary       = "Theme for Andydevs blog"
  spec.homepage      = "https://github.com/andydevs/jekyll-theme-peaceful-gates"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"

  spec.add_development_dependency "bundler", "~> 2.1"
  spec.add_development_dependency "rake", "~> 12.0"
end
