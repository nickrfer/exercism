module BookKeeping
  VERSION = 3
end

class Hamming

  def self.compute(strand1, strand2)
    raise ArgumentError, 'Arguments must have the same length' unless strand1.length == strand2.length
    strandPair = strand1.chars.zip(strand2.chars)
    strandPair.count { |nucleotide1,nucleotide2| nucleotide1 != nucleotide2 }
  end
end
