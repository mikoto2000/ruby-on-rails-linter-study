class Role < ApplicationRecord
  def self.ransackable_attributes(auth_object = nil)
    ["name", "id", "created_at", "updated_at"]
  end

end

