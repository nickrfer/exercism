module BookKeeping
  VERSION = 2
end

class Complement
  @@dnaToRna = {
    'C' => 'G',
    'G' => 'C',
    'T' => 'A',
    'A' => 'U' }

  def self.of_dna(dna)
    dnaChars = dna.chars
    if (dnaChars - @@dnaToRna.keys).empty?
      rnaMap = dnaChars.map { |nucleotide| @@dnaToRna[nucleotide] }
      rnaMap.join()
    else
      ''
    end
  end
end
